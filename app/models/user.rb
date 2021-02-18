class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

   has_many :friendships, :class_name => "Friendship", :foreign_key => "user_id"
   has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"

   def friends
    friends_array = inverse_friendships.map{|friendship| friendship.user if friendship.confirmed}
    friends_array + friendships.map{|friendship| friendship.friend if friendship.confirmed}
    friends_user = friends_array.compact

    friends_array = friendships.map{|friendship| friendship.friend if friendship.confirmed}
    friends_array + inverse_friendships.map{|friendship| friendship.user if friendship.confirmed}
    friends_friend = friends_array.compact

    friends_array = friends_user + friends_friend
   end

   # Requests the user has received
   def pending_friends
     friendships.map{|friendship| friendship.friend if !friendship.confirmed}.compact
   end

   # Users who have requested to be friends
   def friend_requests
     inverse_friendships.map{|friendship| friendship.user if !friendship.confirmed}.compact
   end


   def confirm_friend(user)
     friendship = inverse_friendships.find{|friendship| friendship.user == user}
     friendship.confirmed = true
     friendship.save
   end

   def friend?(user)
     friends.include?(user)
   end
 end

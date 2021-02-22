class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :authentication_keys => [:username]

         validates :email, uniqueness: true
         validates :username, uniqueness: true

   has_many :friendships, :class_name => "Friendship", :foreign_key => "user_id"
   has_many :inverse_friendships, :class_name => "Friendship", :foreign_key => "friend_id"

   def friends
    friends_array = inverse_friendships.map{|friendship| friendship.user if friendship.confirmed} + friendships.map{|friendship| friendship.friend if friendship.confirmed}
    friends_array.compact
   end

   def friends_full_table
    friends_array = inverse_friendships.map{|friendship| friendship.user} + friendships.map{|friendship| friendship.friend}
    p 'PRINTING FRIENDS_FULL_TABLE'
    p friends_array.compact
    friends_array.compact
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
    inverse_friendships.find{|friendship| friendship.user == user
     friendship.confirmed = '1'
     friendship.save
    }
   end

   def delete_request(user)
    inverse_friendships.find{|friendship| friendship.user == user
    friendship.delete
   }
   end

   def friend?(user)
     friends.include?(user)
   end

   def in_friendship_table?(user)
    print "PRINTING USER IN IN_FRIENDSHIP_TABLE?:"
    print user
    friends_full_table.include?(user)
   end 

 end

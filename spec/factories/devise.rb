FactoryBot.define do
  factory :user do
    id {1}
    username {"TestUser"}
    email {"TestUser@example.com"}
    password {"password"}
  end
end
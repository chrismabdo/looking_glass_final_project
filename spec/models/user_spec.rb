require 'rails_helper'

RSpec.describe User, type: :model do
  
  it { is_expected.to be }

  it { should have_many(:friendships) }
  it { should have_many(:inverse_friendships) }
end
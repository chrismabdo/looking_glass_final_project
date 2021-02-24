require 'rails_helper'

RSpec.describe Recommendation, type: :model do
  
  it { is_expected.to be }

  it { should belong_to(:user) }

end

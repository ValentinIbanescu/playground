require '../lib/acronyms'
# require './spec_helper'

describe 'acronyms' do
  it 'should return a string containing first letters in capitalize' do
    sentance = 'work from home'
    expect(acronyms(sentance)).to eq 'WFH'
  end
end

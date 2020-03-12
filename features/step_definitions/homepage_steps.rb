# frozen_string_literal: true

When(/^the homepage is working$/) do
  visit '/'
end

Then(/^it says Hello world!$/) do
  expect(page).to have_content('Hello world')
end

When(/^the user is on the sign in page$/) do
  visit '/authors/sign_in'
end

When(/^the user types in their email and password$/) do
  fill_in 'author[email]', with: '123@example.com'
  fill_in 'author[password]', with: 'password'
end

When(/^clicks the sign in button$/) do
  find('input[type=submit]').click
end

Then(/^they should be signed in$/) do
  expect(page).to have_content('Signed in')
end

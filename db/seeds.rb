# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


volunteer1 = Volunteer.create(username: "davenyoung", first_name: "Daven", last_name: "Young", age: 31, phone_number: "123-456-6789", email: "randomemail1@gmail.com", password: "password")
volunteer2 = Volunteer.create(username: "erickthomas", first_name: "Erick", last_name: "Thomas", age: 30, phone_number: "123-456-6789", email: "randomemail2@gmail.com", password: "password")
volunteer3 = Volunteer.create(username: "monicageller", first_name: "Monica", last_name: "Geller", age: 26, phone_number: "123-456-6789", email: "randomemail3@gmail.com", password: "password")
volunteer4 = Volunteer.create(username: "rossgeller", first_name: "Ross", last_name: "Geller", age: 25, phone_number: "123-456-6789", email: "randomemail4@gmail.com", password: "password")
volunteer5 = Volunteer.create(username: "chandlersure", first_name: "Chandler", last_name: "Sure", age: 27, phone_number: "123-456-6789", email: "randomemail5@gmail.com", password: "password")
volunteer6 = Volunteer.create(username: "joeytribiani", first_name: "Joey", last_name: "Tribiani", age: 27, phone_number: "123-456-6789", email: "randomemail6@gmail.com", password: "password")
volunteer7 = Volunteer.create(username: "clarkkent", first_name: "Clark", last_name: "Kent", age: 34, phone_number: "123-456-6789", email: "randomemail7@gmail.com", password: "password")
volunteer8 = Volunteer.create(username: "brucewayne", first_name: "Bruce", last_name: "Wayne", age: 36, phone_number: "123-456-6789", email: "randomemail8@gmail.com", password: "password")
volunteer9 = Volunteer.create(username: "barryallen", first_name: "Barry", last_name: "Allen", age: 20, phone_number: "123-456-6789", email: "randomemail9@gmail.com", password: "password")
volunteer10 = Volunteer.create(username: "peterparker", first_name: "Peter", last_name: "Parker", age: 16, phone_number: "123-456-6789", email: "randomemail10@gmail.com", password: "password")
volunteer11 = Volunteer.create(username: "tonystark", first_name: "Tony", last_name: "Stark", age: 35, phone_number: "123-456-6789", email: "randomemail11@gmail.com", password: "password")
volunteer12 = Volunteer.create(username: "steverodgers", first_name: "Steve", last_name: "Rodgers", age: 28, phone_number: "123-456-6789", email: "randomemail12@gmail.com",password: "password")


event1 = Event.create(name: "Highway Cleanup", when: "22 June 2022", location: "I-225")
event2 = Event.create(name: "Feed Homeless", when: "23 June 2022", location: "Downtown")
event3 = Event.create(name: "Direct Traffic", when: "24 June 2022", location: "Mile High Stadium")
event4 = Event.create(name: "Chaperone Field Trip", when: "25 June 2022", location: "Denver Zoo")

signup1 = Signup.create(event_id: event1.id, volunteer_id: volunteer1.id)
signup2 = Signup.create(event_id: event1.id, volunteer_id: volunteer2.id)
signup3 = Signup.create(event_id: event1.id, volunteer_id: volunteer3.id)
signup4 = Signup.create(event_id: event2.id, volunteer_id: volunteer4.id)
signup5 = Signup.create(event_id: event2.id, volunteer_id: volunteer5.id)
signup6 = Signup.create(event_id: event2.id, volunteer_id: volunteer6.id)
signup7 = Signup.create(event_id: event3.id, volunteer_id: volunteer7.id)
signup8 = Signup.create(event_id: event3.id, volunteer_id: volunteer8.id)
signup9 = Signup.create(event_id: event3.id, volunteer_id: volunteer9.id)
signup10 = Signup.create(event_id: event4.id, volunteer_id: volunteer10.id)
signup11 = Signup.create(event_id: event4.id, volunteer_id: volunteer11.id)
signup12 = Signup.create(event_id: event4.id, volunteer_id: volunteer12.id)

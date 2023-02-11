# SoftwareEngineeringProject
Description:  Software Engineering Project

A restaurant chain has reached out to your team to build a reservation system. 

Here are the details:

Two categories of users / customers: guest user or registered user.

Users should be able to search for a table and reserve. 

User doesn’t need to login to the system to reserve a table. If registered users, they can login. 

User enters name, phone, email, date and time (date picker), and # of guests for dining and system presents available tables.

Tables have maximum capacity limit i.e., 2, 4, 6, or 8.

Different combinations are allowed, and owner accommodates the seating, for example: someone requests 8 guests and table for 8 is not available but 2 + 6, or 4+4 is available. System should combine the tables and notify owner they need to combine tables. In this case System reserves both tables.

If a guest user i.e., not a registered user, system should prompt a user to register (Optional) before finalizing the reservation.

Registered users will have these fields:

Name, mailing address, billing address (checkbox if same as mailing address), Preferred Diner # (system generated), Earned points (based on $ spent i.e., $1 is 1 point), preferred payment method (cash, credit, check).

System should track high traffic days / weekends and a hold fee is required i.e. July 4th will require valid credit card on a system to reserve the table.

Notify user no show will have minimum $10 charge.

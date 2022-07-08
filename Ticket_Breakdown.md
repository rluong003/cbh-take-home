# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
I'm assuming there's some kind of front end platform to go along with the back end. All the agents at a facility are rendered on a page, and you can make changes to the agent's data on this page.
1. Add an optional customID field onto the agent table. Very simple should take no time at all.
2. Create the front end component. This could just be a very simple html input tag, and when input comes in, we can overwrite the customID field pulled from the database by having some type of local agent object used for input. Should be very quick.
3. Update the database. I'm going to assume there's some sort of update button on our page, which runs a mutation/resolver/put/patch request to update our database on button click. We might have to make changes to this function to include our customID input.
4. Verify that the customID is correctly saved in the database. If the page correctly renders the customID you just put in, then it worked.
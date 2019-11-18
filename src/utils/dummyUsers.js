//****ENDPOINTS****
//login - done
//register - done


//Produce two data endpoints
    //1st list stuff - '/tools'
        //all the tools
        //each tool has a name, owner, location, and price (plus image)

    //2nd user profile - '/user/:id'
        //single user name
        //user's location
        //list of tools w/ pricing

//add a tool

//update user profile and their tools - '/update-user/:id'

//delete user profile

//delete single tool only

export const dummyUsers = [
    {
        id: 1,
        username: 'Bob',
        password: '5678',
        profilePic: '',
        location: 'Fargo, ND'
    },
    {
        id: 2,
        username: 'Judy',
        password: '1234',
        profilePic: '',
        location: 'Casper, WY'
    },
    {
        id: 3,
        username: 'Bill',
        password: 'asdf',
        profilePic: '',
        location: 'Wilmington, DE'
    },
    {
        id: 4,
        username: 'John',
        password: 'jkl;',
        profilePic: '',
        location: 'Austin, TX',
    },
    {
        id: 5,
        username: 'Suzie',
        password: 'good',
        profilePic: '',
        location: 'Memphis, TN',
    },
    {
        id: 6,
        username: 'George',
        password: 'better',
        profilePic: '',
        location: 'Ann Arbor, MI',
    },
    {
        id: 7,
        username: 'Heather',
        password: 'best',
        profilePic: '',
        location: 'Buffalo, NY',
    },
    {
        id: 8,
        username: 'Jim',
        password: 'blob#',
        profilePic: '',
        location: 'St Louis, MO',
    },
    {
        id: 9,
        username: 'Steve',
        password: 'hero42',
        profilePic: '',
        location: 'Seattle, WA',
    },
    {
        id: 10,
        username: 'Adam',
        password: 'next9',
        profilePic: '',
        location: 'Phoenix, AZ',
    },
    {
        id: 11,
        username: 'Joe',
        password: 'believe!',
        profilePic: '',
        location: 'Anchorage, AK',
    },
    {
        id: 12,
        username: 'Jenny',
        password: '9876',
        profilePic: '',
        location: 'Billings, MT',
    }
]
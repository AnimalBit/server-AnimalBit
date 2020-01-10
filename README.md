<!-- # server-AnimalBit
Back-end animalbit
 -->
# REST API DOCUMENTATION
Root URL: http://localhost:3000

**Show Users**
----
Obtain all registered user information in the database(JSON).

* **URL**

  /users

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        [{  
            "matches": [],
            "_id": "5e175999426a39334cbf1699",
            "fullname": "Gabriel Timothy",
            "email": "biel.jaeger03@gmail.com",
            "password": "QWERTY12345",
            "__v": 0
        },
        {
            "matches": [],
            "_id": "5e17dccc80e56e3d20929edb",
            "fullname": "vania irnanda",
            "email": "vaniairnanda@gmail.com",
            "password": "QWERTY12345",
            "__v": 0
        }]

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ message: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        method: 'GET',
        url : 'http://localhost:3000/users/',
        headers: {
            access_token : token
        }
    });
  ```

-------------------------------------------
**Show Users**
----
Sign in to the game with Google OAuth

* **URL**

  /users/google-sign-in

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        {  
            "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6...."
        }

 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ msg: "Bad Request, wrong syntax" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
        $.ajax({
            method: ('POST'),
            url: `http://localhost:3000/users/google-sign-in`,
            data : {
                google_token : id_token
            }
        })
  ```

-------------------------------------------
**Show Users**
----
Get game questions

* **URL**

  /users/game

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        [
            {
                "image": "https://cdn.shibe.online/shibes/dfe40e8d57c6282c72fbc5df2d61cb8cad4ba7d7.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn.shibe.online/shibes/d5eb832129d84f5ecbf33c16bf7e2de8e2a71feb.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MTg2NTIyMg.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MjA4NjkyOQ.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MTg5ODIxNg.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn.shibe.online/shibes/777fdd4e161011c58f1d8a9e18f5a0089055ce6c.jpg",
                "answer": "dog"
            },
            {
                "image": "https://random-d.uk/api/21.jpg",
                "answer": "duck"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/nS12H9od0.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn.shibe.online/shibes/f4818b9c37e727302842c8a089aaf093f58a9e5f.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn.shibe.online/shibes/0285cde52f2914ff59ca310bd035ea560bc7aa1f.jpg",
                "answer": "dog"
            }
        ]

 
* **Error Response:**

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
        $.ajax({
            method: 'GET',
            url:`http://localhost:3000/users/game`,
            headers: {
                access_token : token
            }
        })
  ```

-------------------------------------------

**Show Users**
----
Send game results and get scores

* **URL**

  /matches

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  

        {  
            "match": {
                userId: "ObjectId(apsmaoidwiodnw00d923n)",
                correctAnswers: 9
            },
            stats: {
                [true, true, false, true, true, true, true, true, true, true,]
            },
            userQuestions: [
            {
                "image": "https://cdn.shibe.online/shibes/dfe40e8d57c6282c72fbc5df2d61cb8cad4ba7d7.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn.shibe.online/shibes/d5eb832129d84f5ecbf33c16bf7e2de8e2a71feb.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MTg2NTIyMg.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MjA4NjkyOQ.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/MTg5ODIxNg.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn.shibe.online/shibes/777fdd4e161011c58f1d8a9e18f5a0089055ce6c.jpg",
                "answer": "dog"
            },
            {
                "image": "https://random-d.uk/api/21.jpg",
                "answer": "duck"
            },
            {
                "image": "https://cdn2.thecatapi.com/images/nS12H9od0.jpg",
                "answer": "cat"
            },
            {
                "image": "https://cdn.shibe.online/shibes/f4818b9c37e727302842c8a089aaf093f58a9e5f.jpg",
                "answer": "dog"
            },
            {
                "image": "https://cdn.shibe.online/shibes/0285cde52f2914ff59ca310bd035ea560bc7aa1f.jpg",
                "answer": "dog"
            }
            ]
        }

 
* **Error Response:**

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/matches',
        data :{ userChoices: userChoices, gameQuestions: gameQuestions}
    })
  ```

-------------------------------------------
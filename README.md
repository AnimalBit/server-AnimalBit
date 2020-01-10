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
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    $.ajax({
        method: 'GET',
        url:`http://localhost:3000/users/game`,
        headers: {
            access_token : token
        }nsole.log(r);
      }
    });
  ```
function registerUser(username, callback) {
    setTimeout(() => {
      if (!username) {
        callback("Registration failed: Username is required")
      } else {
        console.log(`User ${username} registered successfully`)
        callback(null, username)
      }
    }, 1000)
  }
  
  function sendVerification(username, callback) {
    setTimeout(() => {
      if (username === "errorUser") {
        callback("Verification failed: Email service unavailable")
      } else {
        console.log(`Verification email sent to ${username}`)
        callback(null, username)
      }
    }, 1000)
  }
  
  function loginUser(username, callback) {
    setTimeout(() => {
      if (username === "hacker") {
        callback("Login failed: Unauthorized access detected")
      } else {
        console.log(`${username} logged in successfully`)
        callback(null, username)
      }
    }, 1000)
  }
  
  function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
      console.log(`Welcome, ${username}!`)
      callback(null);
    }, 1000)
  }
  
  function userWorkflow(username) {
    registerUser(username, (err, registeredUser) => {
      if (err) return console.error(err)
  
      sendVerification(registeredUser, (err, verifiedUser) => {
        if (err) return console.error(err)
  
        loginUser(verifiedUser, (err, loggedInUser) => {
          if (err) return console.error(err)
  
          displayWelcomeMessage(loggedInUser, (err) => {
            if (err) return console.error(err)
            console.log("User workflow completed successfully!")
          })
        })
      })
    })
  }
  
  userWorkflow("Rohit")
import React from 'react';

function App() {
  /**
   * Challenge: add another label and input for the password field
   */
  function signUp(formData) {
    //under the hood this is what happens
    /*event.preventDefault()                  //Stops reloading the page

    const formEl = event.currentTarget        //Gets the form element 
    const formData = new FormData(formEl)     //Creating the data from the form element(object)
    const email = formData.get("email")       //Accessing a specific data from the form
    const password = formData.get("password") //Accessing a specific data from the form

    formEl.reset()*/ //resets the form

    // It is tedious to get each and every data like this
    /*
    const email = formData.get('email');
    const password = formData.get('password');
    const employmentStatus = formData.get('employmentStatus');
    const dietaryRestrictions = formData.getAll('dietaryRestrictions');
    const favColor = formData.get('favColor');
    console.log(favColor);

    */

    // Using Object.fromEnries(formData) to get all the data in an object with its values

    const data = Object.fromEntries(formData); // object with all the form data
    const dietaryRestrictions = formData.getAll('dietaryRestrictions'); // array with dietaryRestrictions data in it
    const allData = {
      ...data,
      dietaryRestrictions,
    };

    console.log(allData);
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form action={signUp}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          defaultValue="This is a description"
        ></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input
              type="radio"
              name="employmentStatus"
              defaultChecked={true}
              value="full-time"
            />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <label>
            <input
              type="checkbox"
              name="dietaryRestrictions"
              defaultChecked={true}
              value="gluten-free"
            />
            Gluten-free
          </label>
        </fieldset>

        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor" name="favColor" defaultValue="blue" required>
          <option value="" disabled>
            -- Choose a color --
          </option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>

        <button>Submit</button>
      </form>
    </section>
  );
}

export default App;

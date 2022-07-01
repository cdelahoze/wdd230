window.addEventListener("load", () => {
    const params = new URL(document.location).searchParams;
    const name = params.get("fname");
    const lname = params.get("lname");
    const phone = params.get("phone");
    const email = params.get("email");
    const url = params.get("url");
    const business = params.get("business");
    const businessAdress = params.get("businessAdress");
    const position = params.get("position");
    const description = params.get("description");

    const audience = params.get("audience");
    const dateform = params.get("current-date");
  
    document.getElementById("name-form").innerHTML = name;
    document.getElementById("lastName-form").innerHTML = lname;
    document.getElementById("cellphone-form").innerHTML = phone;
    document.getElementById("email-form").innerHTML = email;
    document.getElementById("url-form").innerHTML = url;
    document.getElementById("business-form").innerHTML = business;
    document.getElementById("business-adress").innerHTML = businessAdress;
    document.getElementById("business-position").innerHTML = position;
    document.getElementById("description-form").innerHTML = description;

    document.getElementById("membership-form").innerHTML = audience;
    document.getElementById("date-form").innerHTML = dateform;
  });
  
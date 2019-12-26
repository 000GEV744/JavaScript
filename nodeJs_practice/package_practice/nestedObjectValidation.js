const Joi = require("joi");
const arrayString = ["banana", "bacon", "cheese"]; //we want to validate and array of string
const arrayOfObject = [
  {
    name: "Anuj"
  },
  {
    name: "Ambikesh"
  },
  {
    name: "Ram murti"
  }
];
const userinput = {
  personalInfo: {
    streetAdress: "32879921",
    city: "new york",
    state: "ny"
  },
  preferences: arrayString,
  preferences2: arrayOfObject
};
//we are assuming that these are userinput and now we'll create schema for the validation of the userinput
const personalInfoSchema = Joi.object().keys({
  streetAdress: Joi.string()
    .trim()
    .required(),
  city: Joi.string()
    .trim()
    .required(),
  state: Joi.string()
    .trim()
    .length(2)
    .required()
});

//now we'll develop schema for preferences
const preferencesSchema = Joi.array().items(Joi.string());
//using array() gonna give us an array schema and then we're using a helper method called items()
//items() will take any schema as an argument
const preferences2Schema = Joi.array().items(
  Joi.object().keys({
    name: Joi.string()
      .trim()
      .required()
  })
);
//let's combine these two to make one schema
const schema = Joi.object().keys({
  personalInfo: personalInfoSchema,
  preferences: preferencesSchema,
  preferences2: preferences2Schema
});

Joi.validate(userinput, schema, (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
});

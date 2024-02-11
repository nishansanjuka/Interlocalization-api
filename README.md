# Localization API for English and French Locales.

## API Documentation

The Localization API provides content in multiple languages for use in your applications. The primary endpoint allows you to retrieve content based on language.

## Base URL

The base URL for the API is: [https://localization-api.onrender.com](https://localization-api.onrender.com)


## Endpoint

### Retrieve Content

- **URL:** `/api/content`
- **Method:** `GET`
- **Query Parameters:**
  - `lang`: Language code (e.g., `en` for English, `fr` for French).
- **Example Request:**
  ```http
  GET https://localization-api.onrender.com/api/content?lang=en


### Example Response

```json
{
  "landingPage": {
    "title": "Welcome to My App",
    "description": "A simple Next.js app with localization",
    "registrationLink": "Go to Registration"
  },
  "registrationPage": {
    "title": "User Registration",
    "username": "Username",
    "email": "Email",
    "gender": "Gender",
    "male": "Male",
    "female": "Female",
    "other": "Other",
    "civilStatus": "Civil Status",
    "single": "Single",
    "married": "Married",
    "divorced": "Divorced",
    "registerButton": "Register"
  }
}

```

### Error Handling
***If the lang parameter is missing or not supported, the API will respond with a 400 Bad Request status code.
If there is any other error, the API will respond with an appropriate status code and an error message.***

### Supported Languages
#### The API supports the following languages:

> English (en)

>French (fr)

***Please use the appropriate language code when making requests to the API.***

import React, {useState} from 'react'
import axios from 'axios';
import { TextField, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material';

const baseUrl = 'http://localhost:3000';
export default function AddPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [noOfTravellers, setNoOfTravellers] = useState('');
    const [noOfDays, setNoOfDays] = useState('');
    const [country, setCountry] = useState('');
    const [interests, setInterests] = useState('');
    const [season, setSeason] = useState('');
    const [budget, setBudget] = useState('');
    const [foodOptions, setFoodOptions] = useState('');
    const [typeOfStay, setTypeOfStay] = useState('');
    const [modeOfTravel, setModeOfTravel] = useState('');
    const [modeOfTravelWithinCity, setModeOfTravelWithinCity] = useState('');
    const [travelPlan, setTravelPlan] = useState('');
    const [subscription, setSubscription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleNoOfTravellersChange = (e) => {
        setNoOfTravellers(e.target.value);
    };
    const handleNoOfDaysChange = (e) => {
        setNoOfDays(e.target.value);
    };
    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };
    const handleInterestsChange = (e) => {
        setInterests(e.target.value);
    };
    const handleSeasonChange = (e) => {
        setSeason(e.target.value);
    };
    const handleBudgetChange = (e) => {
        setBudget(e.target.value);
    };
    const handleFoodOptionsChange = (e) => {
        setFoodOptions(e.target.value);
    };
    const handleTypeOfStayChange = (e) => {
        setTypeOfStay(e.target.value);
    };
    const handleModeOfTravelChange = (e) => {
        setModeOfTravel(e.target.value);
    };
    const handleModeOfTravelWithinCityChange = (e) => {
        setModeOfTravelWithinCity(e.target.value);
    };
    const handleTravelPlanChange = (e) => {
        setTravelPlan(e.target.value);
    };
    const handleSubscriptionChange = (e) => {
        setSubscription(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = { 
                name: name,
                email: email,
                no_of_travellers: noOfTravellers,
                no_of_days: noOfDays,
                country: country,
                interests: interests,
                season: season,
                budget: budget,
                food_options: foodOptions,
                type_of_stay: typeOfStay,
                mode_of_travel: modeOfTravel,
                mode_of_travel_within_city: modeOfTravelWithinCity,
                travel_plan: travelPlan,
                subscription: subscription
            };
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint URL.
            const response = await axios.post(`${baseUrl}/api/travel-plan`, formData);
            window.location.reload()
        } catch (error) {
        // Handle error if the API call fails.
        console.error('API Error:', error);
        }
    };
  return (
    <form style={{margin: 10}} onSubmit={handleSubmit}>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <TextField
          label="Email"
          value={email}
          onChange={handleEmailChange}
          variant="outlined"
          required
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <TextField
          label="No. of Travellers"
          value={noOfTravellers}
          onChange={handleNoOfTravellersChange}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <TextField
          label="No. of Days"
          value={noOfDays}
          onChange={handleNoOfDaysChange}
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          value={country}
          onChange={handleCountryChange}
          label="Country"
          required
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Spain">Spain</MenuItem>
          <MenuItem value="Thailand">Thailand</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="interests-label">Interests</InputLabel>
        <Select
          labelId="interests-label"
          id="interests"
          value={interests}
          onChange={handleInterestsChange}
          label="Interests"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Mountains">Mountains</MenuItem>
          <MenuItem value="Beach">Beach</MenuItem>
          <MenuItem value="Adventure Sports">Adventure Sports</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="season-label">Season</InputLabel>
        <Select
          labelId="season-label"
          id="season"
          value={season}
          onChange={handleSeasonChange}
          label="Season"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Winter">Winter</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
          <MenuItem value="Rainy">Rainy</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="budget-label">Budget</InputLabel>
        <Select
          labelId="budget-label"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          label="Budget"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Less than 1 Lakh">Less than 1 Lakh</MenuItem>
          <MenuItem value="1 - 5 Lakh">1 - 5 Lakh</MenuItem>
          <MenuItem value="More than 5 Lakh">More than 5 Lakh</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="foodOptions-label">Food Options</InputLabel>
        <Select
          labelId="foodOptions-label"
          id="foodOptions"
          value={foodOptions}
          onChange={handleFoodOptionsChange}
          label="Food Options"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Veg">Veg</MenuItem>
          <MenuItem value="Non-Veg">Non-Veg</MenuItem>
          <MenuItem value="Sea Food">Sea Food</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="typeOfStay-label">Type of Stay</InputLabel>
        <Select
          labelId="typeOfStay-label"
          id="typeOfStay"
          value={typeOfStay}
          onChange={handleTypeOfStayChange}
          label="Type of Stay"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Hotel Room">Hotel Room</MenuItem>
          <MenuItem value="Resort">Resort</MenuItem>
          <MenuItem value="Dorm">Dorm</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="modeOfTravel-label">Mode of Travel</InputLabel>
        <Select
          labelId="modeOfTravel-label"
          id="modeOfTravel"
          value={modeOfTravel}
          onChange={handleModeOfTravelChange}
          label="Mode of Travel"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Road">Road</MenuItem>
          <MenuItem value="Railway">Railway</MenuItem>
          <MenuItem value="Air">Air</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="modeOfTravelWithinCity-label">Mode of Travel Within City</InputLabel>
        <Select
          labelId="modeOfTravelWithinCity-label"
          id="modeOfTravelWithinCity"
          value={modeOfTravelWithinCity}
          onChange={handleModeOfTravelWithinCityChange}
          label="Mode of Travel Within City"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Bike">Bike</MenuItem>
          <MenuItem value="Car">Car</MenuItem>
          <MenuItem value="Taxi">Taxi</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="travelPlan-label">Travel Plan</InputLabel>
        <Select
          labelId="travelPlan-label"
          id="travelPlan"
          value={travelPlan}
          onChange={handleTravelPlanChange}
          label="Travel Plan"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Compact">Compact - Planning to travel more cities</MenuItem>
          <MenuItem value="Flexible">Flexible - Spend more time in one city</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel id="subscription-label">Subscription</InputLabel>
        <Select
          labelId="subscription-label"
          id="subscription"
          value={subscription}
          onChange={handleSubscriptionChange}
          label="Subscription"
        >
          <MenuItem value="">Select an option</MenuItem>
          <MenuItem value="Free">Free - AI generated trip plan</MenuItem>
          <MenuItem value="Paid">Paid - Personally curated trip plan</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">Submit</Button>
    </form>
  )
}

import axios from "axios";

const ApiService = {
  submitRoute: async (selectedDate, startLocation, endLocation, mode) => {
    try {
      // Generating the POST request to the backend
      const response = await axios.post(
        "http://localhost:8000/map-api/best-path",
        {
          date: selectedDate,
          source: startLocation,
          target: endLocation,
          mode: mode,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Data:", response.data);

      // const firstObject = response.data[0];

      // console.log("First Object:", JSON.stringify(firstObject));

      return response;
    } catch (error) {
      // Handle any errors
      console.error("Error:", error);
      throw error;
    }
  },

  submitDate: async (date) => {
    try {
        // Generating the POST request to the backend
        const response = await axios.post('http://localhost:8000/map-api/render-map', { date });
          console.log("Data:", response.data);

          const firstObject = response.data[0];

          console.log("First Object:", JSON.stringify(firstObject));
        

        
          return response;
      } catch (error) {
        // Handle any errors
        console.error('Error:', error);
        throw error;
      }
}
};

export default ApiService;

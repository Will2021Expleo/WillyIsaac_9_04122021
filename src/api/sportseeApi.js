import axios from "axios";

const URL = "http://localhost:3000/user";

//HeaderCard and ParsonalDataCard
export const fetchPersonalData = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    let calorieCount = data.data.keyData.calorieCount;
    let carbohydrateCount = data.data.keyData.carbohydrateCount;
    let lipidCount = data.data.keyData.lipidCount;
    let proteinCount = data.data.keyData.proteinCount;
    let firstName = data.data.userInfos.firstName;
    let userId = data.data.id;

    const getPersonalData = {
      calorieCount,
      carbohydrateCount,
      lipidCount,
      proteinCount,
      firstName,
      userId,
    };
    console.log(getPersonalData);
    return getPersonalData;
  } catch (error) {
    return false;
  }
};

//à remplacer par la version ci-dessus
export const fetchDailyActivity = async (id) => {
  try {
    const res = await axios.get(`${URL}/${id}/activity`);
    let sessions = res.data.data.sessions;
    return sessions;
  } catch (error) {
    return false;
  }
};

//Durée moyenne des sessions
export const fetchAverageSessions = async (id) => {
  try {
    const res = await axios.get(`${URL}/${id}/average-sessions`);
    // console.log(res.data.data.sessions);
    return res.data.data.sessions;
  } catch (error) {
    return false;
  }
};

export const fetchPerformance = async (id) => {
  try {
    const res = await axios.get(`${URL}/${id}/performance`);
    let data = res.data.data.data;

    return data;
  } catch (error) {
    return false;
  }
};

//score
export const fetchScore = async (id) => {
  try {
    const data = await axios.get(`${URL}/${id}`);
    let score = data.data.data.score;
    let todayScore = data.data.data.todayScore;
    console.log(data.data.data);
    if (score === undefined) {
      return todayScore;
    }
    return score;
  } catch (error) {
    return false;
  }
};

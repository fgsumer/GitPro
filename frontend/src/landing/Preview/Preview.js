import React from 'react';
// import ReactDOM from 'react-dom';

const useFetch = url => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, [url]);
  return { response, error };
};

function Preview() {
  const res = useFetch(`http://localhost:5000/personal/5df272a7a1dde311819f92ad`);

  if (!res.response) {
    return null;
    // return <div>Loading...</div>;
  }

  // // const title = res.response.title;
  const name = res.response.name;
  const surname = res.response.surname;
  const picture = res.response.picture;
  const phone = res.response.phone;
  const country = res.response.country;
  const city = res.response.city;
  const website = res.response.website;
  const email = res.response.email;
  const institution1 = res.response.education[0].institution;
  const institution2 = res.response.education[1].institution;
  // const institution3 = res.response.education[2].institution;
  const fieldOfStudy1 = res.response.education[0].fieldOfStudy;
  const fieldOfStudy2 = res.response.education[1].fieldOfStudy;
  // const fieldOfStudy3 = res.response.education[2].fieldOfStudy;
  const degree1 = res.response.education[0].degree;
  const degree2 = res.response.education[1].degree;
  // const degree3 = res.response.education[1].fieldOfStudy;

  // const education2 = res.response.education[0].fieldOfStudy;
  // const company = res.response.workExperience[0].companyName;

  return (
    <div style={{ textAlign: 'center' }}>
      {/* <h3>{title} </h3> */}
      <h3>{name} </h3>
      <h3>{surname} </h3>
      <h3>{picture}</h3>
      <h3> {phone}</h3>
      <h3> {country}</h3>
      <h3> {city}</h3>
      <h3> {website}</h3>
      <h3>{email}</h3>
      <h3>{institution1}</h3>
      <h3>{fieldOfStudy1}</h3>
      <h3>{degree1}</h3>
      <h3>{institution2}</h3>
      <h3>{fieldOfStudy2}</h3>
      <h3>{degree2}</h3>
      {/* <h3>{institution3}</h3> */}
      {/* <h3>{fieldOfStudy3}</h3> */}
    </div>
  );
}
export default Preview;

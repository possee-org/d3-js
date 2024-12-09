import React from "react";
import Barchart from "./components/barchart";

const App = () => {
  return (
    <div>
      <h1>Numpy 2020 survey results</h1>
      
      <h2>Preferred language</h2>
      <Barchart question="Q2.4" />

      <h2>Level of education</h2>
      <Barchart question="Q2.7" />

      <h2>Current role in organization</h2>
      <Barchart question="Q2.9" />

      <h2>Version of NumPy used</h2>
      <Barchart question="Q2.10" />

      <h2>Primary use of NumPy</h2>
      <Barchart question="Q2.11" />

      <h2>Years of programming experience</h2>
      <Barchart question="Q2.12" />

      <h2>Years of experience using Numpy</h2>
      <Barchart question="Q2.13" />

      <h2>Frequency of use of NumPy</h2>
      <Barchart question="Q2.14" />

      <h2>Custom C extensions making use of the NumPy C-API (aside from Cython)</h2>
      <Barchart question="Q2.16" />

      <h2>Contributed to any open source project before, excluding NumPy</h2>
      <Barchart question="Q3.2" />

      <h2>Are you a regular contributor to these open source projects?</h2>
      <Barchart question="Q3.5" />

      <h2>Interest in contributing to open source projects</h2>
      <Barchart question="Q3.7" />

      <h2>Ever contributed to NumPy</h2>
      <Barchart question="Q4.1" />

      <h2>Are you a regular contributor to NumPy?</h2>
      <Barchart question="Q4.3" />

      <h2>Do you plan to continue making contributions to NumPy?</h2>
      <Barchart question="Q4.6" />

      <h2>Are you interested in contributing to NumPy?</h2>
      <Barchart question="Q4.8" />

      <h2>Participation in a mentorship program in any open source community</h2>
      <Barchart question="Q5.2" />

      <h2>What is\/was your role in the program(s)?</h2>
      <Barchart question="Q5.3" />

      <h2>Were you paid for your service as a mentor?</h2>
      <Barchart question="Q5.4" />

      <h2>Charged any fees to participate in the mentorship program</h2>
      <Barchart question="Q5.8" />

      <h2>If NumPy had a mentorship program, would you be interested in participating?</h2>
      <Barchart question="Q5.12" />

      <h2>Currently using the new random API</h2>
      <Barchart question="Q7.2" />

      <h2>Experienced problems in code last year</h2>
      <Barchart question="Q7.3" />

      <h2>Numerical data problems that were unable to solve using NumPy</h2>
      <Barchart question="Q7.5" />

      <h2>Good deprecation time frame</h2>
      <Barchart question="Q7.7" />

      <h2>Is the organization interested in funding NumPy?</h2>
      <Barchart question="Q8.3" />

      <h2>How users heard about the survey</h2>
      <Barchart question="Q9.1" />
    </div>
  );
};

export default App;


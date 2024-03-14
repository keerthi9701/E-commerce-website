function Text() {
    let demoArray = [
      {
        id: 101,
        Mathematics: 90,
        English: 80,
        Science: 95
      },
      {
        id: 102,
        Mathematics: 85,
        English: 60,
        Science: 70
      },
      {
        id: 103,
        Mathematics: 86,
        English: 75,
        Science: 98
      },
      {
        id: 104,
        Mathematics: 71,
        English: 67,
        Science: 64
      },
      {
        id: 105,
        Mathematics: 94,
        English: 73,
        Science: 70
      },
      {
        id: 106,
        Mathematics: 97,
        English: 85,
        Science: 93
      }
    ];
  
    return (
      <div className="container pt-5">
        <div className="row">
          {demoArray.map((subjects, index) => (
            <div className="col-sm-3" key={index}>
              <h4>ID: {subjects.id}</h4>
              <h4>Mathematics: {subjects.Mathematics}</h4>
              <h4>English: {subjects.English}</h4>
              <h4>Science: {subjects.Science}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Text;
  
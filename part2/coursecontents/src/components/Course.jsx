// render {name} and {exercises} as <p>
// refactored using arrow function
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Total = ({ parts }) => {
  // unpack parts, assign total as sum of exercises using reduce sum
  const total = parts.reduce((sum, { exercises }) => sum + exercises, 0);
  return (
    // return fragment of jsx to render in App
    <>
      <p style={{ fontWeight: "bold" }}>Total of {total} exercises</p>
    </>
  );
};

const Course = ({ course }) => (
  <div>
    <h2>{course.name}</h2>
    {course.parts.map((p, id) => {
      return <Part key={id} name={p.name} exercises={p.exercises} />;
    })}
    <Total parts={course.parts} />
  </div>
);

export default Course;

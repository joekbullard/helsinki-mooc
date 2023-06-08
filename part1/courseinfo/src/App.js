// render course directly as <h1>
// refactored using arrow function
const Header = ({ course }) => <h1>{course}</h1>;

// render {name} and {exercises} as <p>
// refactored using arrow function
const Part = ({ name, exercises }) => <p>{name} {exercises}</p>;

const Content = ({ parts }) => (
  // use map on part objects to pass individual items to Part component
  // index is used as a unique id for key to supress warning (e.g. https://sentry.io/answers/unique-key-prop/)
  <>
    {parts.map(({ name, exercises }, index) => (
      <Part key={index} name={name} exercises={exercises} />
    ))}
  </>
);

const Footer = ({ parts }) => {
  // unpack parts, assign total as sum of exercises using reduce sum
  const total = parts.reduce(
    (sum, { exercises }) => sum + exercises, 0
  );
  return (
    // return fragment of jsx to render in App
    <>
      <p>Number of exercises {total}</p>
    </>
  )
};


const App = () => {

  // all vars as single object with nested array
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  // refactored to better utilise components
  // vars adjusted following move to object structure
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer parts={course.parts} />
    </div>
  )
}

export default App
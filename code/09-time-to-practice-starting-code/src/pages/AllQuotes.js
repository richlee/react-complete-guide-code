import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: "Rich", text: "Learning React is fun" },
    {id: 'q2', author: "Ricardo", text: "Spelling correctly is even better" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;

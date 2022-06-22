import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
    {id: 'q1', author: "Rich", text: "Learning React is fun" },
    {id: 'q2', author: "Ricardo", text: "Spelling correctly is even better" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      {/* <Route part="/quotes/:quoteId/comments"> alt if we're using a Route and not a Link */}
      <Route part={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;

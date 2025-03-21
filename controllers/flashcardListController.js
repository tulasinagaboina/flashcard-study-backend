export const   getFlashcardList = (req,res) => {
const dummyFlashcards  = [
    { term: 'React', definition: 'A JavaScript library for building UIs' },
    { term: 'Express', definition: 'A Node.js framework for backend' }
];
 res.json({dummyFlashcards})
};
export default getFlashcardList;

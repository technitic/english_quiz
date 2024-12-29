// Quiz questions array
const questions = [
     {
       question: "1: What part of speech is the word 'run' in the sentence 'I will run to the store'?",
       answers: ["Noun", "Verb", "Adjective", "Adverb"],
       correct: 1,
     },
     {
       question: "2: Identify the part of speech of the word 'happy' in the sentence 'I am happy today'",
       answers: ["Noun", "Verb", "Adjective", "Adverb"],
       correct: 2,
     },
     {
       question: "3: Which part of speech is the word 'the' in the sentence 'The book is on the table'?",
       answers: ["Article", "Adjective", "Adverb", "Preposition"],
       correct: 0,
     },
     {
       question: "4: Identify the part of speech of the word quickly’ in the sentence ‘She quickly finished her homework’",
       answers: ["Adverb", "Adjective", "Verb", "Noun"],
       correct: 0,
     },
     {
       question: "5: Which part of speech is the word ‘dog’ in the sentence ‘The dog is barking’?",
       answers: ["Verb", "Noun", "Adjective", "Adverb"],
       correct: 1,
     },
     {
       question: "6: Identify the part of speech of the word ‘well’ in the sentence ‘She sings well’.",
       answers: ["Verb", "Adjective", "Adverb", "Noun"],
       correct: 2,
     },
     {
       question: "7: Which part of speech is the word 'big' in the sentence 'The big house is for sale'?",
       answers: ["Verb", "Pronoun", "Adverb", "Adjective"],
       correct: 3,
     },
     {
       question: "8: Identify the part of speech of the word 'write' in the sentence 'I will write a letter'",
       answers: ["AdVerb", "verb", "Adjective", "Preposition"],
       correct: 1,
     },
     {
       question: "9: Which part of speech is the word 'a' in the sentence 'I have a book'?",
       answers: ["AdVerb", "verb", "Article", "Preposition"],
       correct: 2,
     },
     {
       question: "10: Identify the part of speech of the word 'fast' in the sentence 'He runs fast'.",
       answers: ["AdVerb", "verb", "Adjective", "Preposition"],
       correct: 0,
     },
     {
       question: "11: What is the function of the phrase 'in the morning' in the sentence 'I will study in the morning'?",
       answers: ["Subject", "Object", "Verb", "Phrase"],
       correct: 3,
     },
     {
       question: "12: What is the function of the phrase 'with my friends' in the sentence 'I will go to the movies with my friends'?",
       answers: ["Phrase", "Subject", "Verb", "Object"],
       correct: 0,
     },
     {
       question: "13: Identify the type of phrase in the sentence 'The big red car is mine'",
       answers: ["Adjective phrase", "Verb phrase", "Noun phrase", "Nothing"],
       correct: 2,
     },
     {
       question: "14: What is the function of the clause 'because I am tired' in the sentence 'I will not go to the party because I am tired'?",
       answers: ["Dependent clause", "Independent Clause", "Phrase", "Preposition"],
       correct: 0,
     },
     {
       question: "15: Which of the following is an example of a phrase?",
       answers: ["She ran quickly", "After the game ended", "In the middle of the night", "Although he was tired"],
       correct: 2,
     },
     {
       question: "16: Which of the following is an example of a clause?",
       answers: ["On the table.", "The cat sat on the mat", "Into the forest", "Over the hill"],
       correct: 1,
     },
     {
       question: "17: A phrase always lacks:",
       answers: ["A Subject", "A verb", "Both A and B", "Preposition"],
       correct: 2,
     },
     {
       question: "18: Identify the clause in the sentence 'I stayed home because it was raining'",
       answers: ["I stayed home", "Because it was raining", "Stayed home", "Home because it was raining"],
       correct: 1,
     },
     {
       question: "19: In the sentence, 'After the storm passed, we went outside,' which part is the clause?",
       answers: ["After the storm passedAdVerb", "After the storm", "We went outside", "Both A and C"],
       correct: 3,
     },
     {
       question: "20: Choose the correct example of a clause:",
       answers: ["Running through the park", "Although the sun was shining", "Inside the dark cave", "To see the stars"],
       correct: 1,
     },
     {
       question: "21: What is a simple sentence?",
       answers: ["A sentence with two or more independent clauses.", "A sentence with one independent clause and one dependent clause.", "A sentence with only one independent clause", "A sentence that starts with a conjunction."],
       correct: 2,
     },
     {
       question: "22: Which of the following is a compound sentence?",
       answers: [" She likes coffee, and he likes tea.", "She likes coffee because it energizes her.", "Although she likes coffee, he prefers tea.", "She likes coffee while reading books."],
       correct: 0,
     },
     {
       question: "23: A complex sentence is characterized by:'",
       answers: ["Two independent clauses joined by a conjunction.", "One independent clause and at least one dependent clause.", "Two dependent clauses.", "A list of phrases."],
       correct: 1,
     },
     {
       question: "24: Which of the following is a compound-complex sentence?",
       answers: ["He went to the store, and she stayed home because she was tired.", "She left early to catch the train.", "He reads books and writes poetry.", "Although she was tired, she went for a run."],
       correct: 0,
     },
     {
       question: "25:'I like ice cream, but I can't eat it because I am lactose intolerant,' what type of sentence is it?",
       answers: ["Simple", "Compound", "Complex", "Compound Complex"],
       correct: 3,
     },
     {
       question: "26: Which sentence is simple?",
       answers: ["Although it was raining, we went outside to play.", "The sun rose beautifully.", "She studies hard, and she excels in her exams.", "The dog barked loudly while the cat hid under the bed."],
       correct: 1,
     },
     {
       question: "27: Identify the complex sentence:",
       answers: ["I bought apples and oranges.", "When the storm ended, we went for a walk", "The cat slept, and the dog barked.", "He loves swimming and hiking."],
       correct: 1,
     },
     {
       question: "28: 'The team won the game, and the crowd cheered loudly,' what type of sentence is it?",
       answers: ["Simple", "Compound Complex", "Complex", "Compound"],
       correct: 3,
     },
     {
       question: "29: Identify the simple sentence:",
       answers: ["While it was snowing, we stayed indoors and played games.", "The dog barked at the mailman.", " I wanted to go, but I didn’t have time.", "Although it was late, we decided to watch a movie."],
       correct: 1,
     },
     {
       question: "30: Which of the following is a Complex sentence?",
       answers: ["I went to the park.", "I went to the park, and I played soccer.", "Although I was tired, I went to the park.", "I went to the park because it was sunny."],
       correct: 3,
     },
     {
       question: "31: What is a synonym?",
       answers: ["A word with the opposite meaning of another word.", "A word that has the same or a similar meaning as another word.", "A word that sounds the same as another word.", "A word that describes an action."],
       correct: 1,
     },
     {
       question: "32: What is an antonym?",
       answers: ["A word that describes the opposite action of a verb.", "A word that sounds similar to another word.", "A word that has the opposite meaning of another word.", "A word that is a type of adjective."],
       correct: 2,
     },
     {
       question: "33: Which of the following is a pair of synonyms?",
       answers: ["Happy - Sad", "Fast - Slow", "Hot - Cold", "Big - Large"],
       correct: 3,
     },
     {
       question: "34: Which of the following is a pair of antonyms?",
       answers: ["Love - Affection", "Bright - Dull", "Clever - Intelligent", "Tall - High"],
       correct: 1,
     },
     {
       question: "35: What type of synonym is used to express exact similarity in meaning?",
       answers: ["Partial synonym", "Near synonym", "Absolute synonym", "Contextual synonym"],
       correct: 2,
     },
     {
       question: "36: What are gradable antonyms?",
       answers: ["Words that describe opposites on a spectrum or scale.", "Words with the exact opposite meaning.", "Words that cannot exist without each other.", "Words that have similar meanings."],
       correct: 0,
     },
     {
       question: "37: Which of the following is a pair of complementary antonyms?",
       answers: ["True - False", "Large - Small", "Happy - Content", "Hard - Soft"],
       correct: 0,
     },
     {
       question: "38: Which of the following is a pair of gradable antonyms?",
       answers: ["Dead - Alive", "Hot - Cold", "Male - Female", "Push - Pull"],
       correct: 1,
     },
     {
       question: "39: What type of antonyms are relational?",
       answers: ["Words that differ only slightly in meaning.", "Words that are synonyms in some contexts.", "Opposites that are based on relation", "Words that change meaning based on the sentence."],
       correct: 2,
     },
     {
       question: "40: Which of the following is a pair of relational antonyms?",
       answers: ["Teacher - Student", "Hot - Warm", "Bright - Shiny", "Old - New"],
       correct: 1,
     },
     {
       question: "41:What is word formation?",
       answers: ["The process of changing the meaning of a word through punctuation.", " The process of creating new words from existing words or roots.", "The act of combining sentences to form paragraphs.", "The study of language sounds."],
       correct: 1,
     },
     {
       question: "42: Which of the following is an example of derivation?",
       answers: ["Add - Added", "Happy - Happiness", "Sing - Singer", "Play - Playing"],
       correct: 1,
     },
     {
       question: "43: What is compounding in word formation?",
       answers: ["Adding a prefix or suffix to a root word.", "Repeating a word to create emphasis.", "Joining two or more words to form a new word.", "Borrowing words from another language."],
       correct: 2,
     },
     {
       question: "44: Which of the following is a compound word?",
       answers: ["Books", "Running", "Happily", " Snowflake"],
       correct: 3,
     },
     {
       question: "45: What is conversion in word formation?",
       answers: ["Creating a new word by borrowing from another language.", "Changing a word's grammatical category without altering its form.", "Repeating parts of a word for emphasis.", "Adding prefixes or suffixes to a word."],
       correct: 1,
     },
     {
       question: "46: What is clipping in word formation?",
       answers: ["Shortening a word by removing its beginning or end.", "Combining parts of two words to form a new word.", "Borrowing words from another language.", "Repeating a word for emphasis."],
       correct: 0,
     },
     {
       question: "47: Which of the following is an example of clipping?",
       answers: ["Television → TV", "Photograph → Photo", "International → Inter", "Playground → Ground"],
       correct: 1,
     },
     {
       question: "48: Which of the following is an example of blending?",
       answers: ["Smoke + Fog → Smog", "National + Interest → Nationinterest", "Book + Shelf → Bookshelf", "Light + House → Lighthouse"],
       correct: 0,
     },
     {
       question: "49: Which of the following words contains a suffix?",
       answers: ["Unhappy", "Happiness", "Restart", "Preview"],
       correct: 1,
     },
     {
       question: "50: Which process involves shortening a word?",
       answers: ["Derivation", "Blending", "Clipping", "Compounding"],
       correct: 2,
     },
     
   ];
   
   let currentQuestionIndex = 0;
   let score = 0;
   
   // Load a question
   function loadQuestion() {
     const questionElement = document.getElementById("question");
     const answersElement = document.getElementById("answers");
     const nextButton = document.getElementById("next");
   
     // Clear previous answers
     answersElement.innerHTML = "";
     nextButton.disabled = true;
   
     const currentQuestion = questions[currentQuestionIndex];
     questionElement.textContent = currentQuestion.question;
   
     currentQuestion.answers.forEach((answer, index) => {
       const button = document.createElement("button");
       button.classList.add("answer");
       button.textContent = answer;
       button.addEventListener("click", () => handleAnswerClick(button, index === currentQuestion.correct));
       answersElement.appendChild(button);
     });
   }
   
   // Handle answer click
   function handleAnswerClick(button, isCorrect) {
     const buttons = document.querySelectorAll(".answer");
   
     // Highlight correct and incorrect answers
     buttons.forEach((btn, index) => {
       btn.classList.add(index === questions[currentQuestionIndex].correct ? "correct" : "incorrect");
       btn.disabled = true;
     });
   
     // Update score if correct
     if (isCorrect) score++;
   
     // Enable the Next button
     document.getElementById("next").disabled = false;
   }
   
   // Move to the next question or show results
   document.getElementById("next").addEventListener("click", () => {
     currentQuestionIndex++;
     if (currentQuestionIndex < questions.length) {
       loadQuestion();
     } else {
       showResults();
     }
   });
   
   // Show results and play again option
   function showResults() {
     const quizElement = document.getElementById("quiz");
     quizElement.innerHTML = `
       <h2>Quiz Completed!</h2>
       <p>Your Score: ${score} / ${questions.length}</p>
       <button id="play-again" class="next-button">Play Again</button>
     `;
   
     // Add event listener to the Play Again button
     document.getElementById("play-again").addEventListener("click", restartQuiz);
   }
   
   // Restart the quiz
   function restartQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     loadQuestion();
   }
   
   // Initialize the quiz
   loadQuestion();
   
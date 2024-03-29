import {Injectable} from 'angular2/core'

const url = '/api/quiz';
const quizList:IQuizList[] =
  [
    {
      title: "U.S. Citizenship",
      tagLine: "Think you can pass this quiz of basic knowledge of American government, history, and geography?",
      added: "2015-07-04T18:25:43.511Z",
      rating: 3,
      _id: 1,
      tags: [
        "history",
        "geography",
        "United States"
      ],
      quiz: {
        questions: [
          {
            question: "Who is in charge of the executive branch?",
            choices: [
              {choice: "The President", isAnswer: true},
              {choice: "Speaker of the House"},
              {choice: "Chief Justice"},
              {choice: "Majority Whip"}
            ]
          },
          {
            "question": "What colors are on the U.S. flag?",
            "choices": [
              {"choice": "green"},
              {"choice": "white", "isAnswer": "true"},
              {"choice": "violet"},
              {"choice": "blue", "isAnswer": "true"},
              {"choice": "red", "isAnswer": "true"}
            ]
          },
          {
            "question": "The Supreme Court is part of the judicial branch (true or false?)",
            "choices": [
              {"choice": "false"},
              {"choice": "true", "isAnswer": "true"}
            ]
          },
          {
            "question": "How many U.S. Senators are there?",
            "choices": [
              {"choice": "50"},
              {"choice": "100", "isAnswer": "true"},
              {"choice": "200"},
              {"choice": "435"}
            ]
          },
          {
            "question": "We elect a President for how many years?",
            "choices": [
              {"choice": "2"},
              {"choice": "4", "isAnswer": "true"},
              {"choice": "6"},
              {"choice": "10"}
            ]
          },
          {
            "question": "If the President can no longer serve, who becomes President?",
            "choices": [
              {"choice": "The First Lady"},
              {"choice": "Speaker of the House"},
              {"choice": "Senate Majority Leader"},
              {"choice": "The Vice President", "isAnswer": "true"}
            ]
          },
          {
            "question": "Who vetoes bills?",
            "choices": [
              {"choice": "Congress"},
              {"choice": "The President", "isAnswer": "true"},
              {"choice": "The Vice President"},
              {"choice": "Senators"}
            ]
          },
          {
            "question": "What are the two major political parties in the United States?",
            "choices": [
              {"choice": "Democratic and Republican", "isAnswer": "true"},
              {"choice": "Liberty and Justice"},
              {"choice": "Law and Order"},
              {"choice": "Checks and Balances"}
            ]
          },
          {
            "question": "How old do citizens have to be to vote for President?",
            "choices": [
              {"choice": "16"},
              {"choice": "18", "isAnswer": "true"},
              {"choice": "21"},
              {"choice": "25"}
            ]
          },
          {
            "question": "When was the Declaration of Independence adopted?",
            "choices": [
              {"choice": "July 4, 1776", "isAnswer": "true"},
              {"choice": "December 7, 1941"},
              {"choice": "January 1, 1800"},
              {"choice": "May 25, 1787"}
            ]
          },
          {
            "question": "Who was the first President?",
            "choices": [
              {"choice": "Thomas Jefferson"},
              {"choice": "George Washington", "isAnswer": "true"},
              {"choice": "Abraham Lincoln"},
              {"choice": "Benjamin Franklin"}
            ]
          },
          {
            "question": "What ocean is on the West Coast of the United States?",
            "choices": [
              {"choice": "Pacific", "isAnswer": "true"},
              {"choice": "Atlantic"},
              {"choice": "Indian"},
              {"choice": "Gulf of Mexico"}
            ]
          },
          {
            "question": "What is the capital of the United States?",
            "choices": [
              {"choice": "New York, NY"},
              {"choice": "Philadelphia, PA"},
              {"choice": "Boston, MA"},
              {"choice": "Washington, DC", "isAnswer": "true"}
            ]
          },
          {
            "question": "Why does the flag have 50 stars?",
            "choices": [
              {"choice": "one for each state", "isAnswer": "true"},
              {"choice": "one for each Senator"},
              {"choice": "one for each amendment"},
              {"choice": "one for each original colony"}
            ]
          },
          {
            "question": "When do we celebrate Independence Day?",
            "choices": [
              {"choice": "January 1st"},
              {"choice": "April 15th"},
              {"choice": "July 4th", "isAnswer": "true"},
              {"choice": "Second Tuesday in November"}
            ]
          },
          {
            "question": "The idea of self-government is in the first three words of the Constitution. What are these words?",
            "choices": [
              {"choice": "Life, Liberty, Happiness"},
              {"choice": "Be it Resolved"},
              {"choice": "We the People", "isAnswer": "true"},
              {"choice": "Make no law"}
            ]
          },
          {
            "question": "What is the economic system in the United States?",
            "choices": [
              {"choice": "capitalist", "isAnswer": "true"},
              {"choice": "socialist"},
              {"choice": "communist"},
              {"choice": "barter"}
            ]
          },
          {
            "question": "We elect a U.S. Senator for how many years?",
            "choices": [
              {"choice": "2"},
              {"choice": "4"},
              {"choice": "6", "isAnswer": "true"},
              {"choice": "10"}
            ]
          },
          {
            "question": "If both the President and the Vice President can no longer serve, who becomes President?",
            "choices": [
              {"choice": "The Speaker of the House", "isAnswer": "true"},
              {"choice": "The Chief Justice"},
              {"choice": "Secretary of the Treasury"},
              {"choice": "Postmaster General"}
            ]
          },
          {
            "question": "How many justices are on the Supreme Court?",
            "choices": [
              {"choice": "7"},
              {"choice": "8"},
              {"choice": "9", "isAnswer": "true"},
              {"choice": "12"}
            ]
          },
          {
            "question": "Who wrote the Declaration of Independence?",
            "choices": [
              {"choice": "George Washington"},
              {"choice": "Thomas Jefferson", "isAnswer": "true"},
              {"choice": "Abraham Lincoln"},
              {"choice": "Franklin Roosevelt"}
            ]
          },
          {
            "question": "Who was President during the Great Depression and World War II?",
            "choices": [
              {"choice": "Richard Nixon"},
              {"choice": "Andrew Jackson"},
              {"choice": "Woodrow Wilson"},
              {"choice": "Franklin Roosevelt", "isAnswer": "true"}
            ]
          },
          {
            "question": "During the Cold War, what was the main concern of the United States?",
            "choices": [
              {"choice": "Unemployment"},
              {"choice": "Hunger"},
              {"choice": "Communism", "isAnswer": "true"},
              {"choice": "National Parks"}
            ]
          },
          {
            "question": "How many amendments does the Constitution have?",
            "choices": [
              {"choice": "25"},
              {"choice": "26"},
              {"choice": "27", "isAnswer": "true"},
              {"choice": "28"}
            ]
          },
          {
            "question": "Who is the current Chief Justice of the United States?",
            "choices": [
              {"choice": "John Roberts", "isAnswer": "true"},
              {"choice": "Ruth Bader Ginsburg"},
              {"choice": "William Rehnquist"},
              {"choice": "Antonin Scalia"}
            ]
          },
          {
            "question": "Who was President during World War I?",
            "choices": [
              {"choice": "Franklin Roosevelt"},
              {"choice": "Theodore Roosevelt"},
              {"choice": "Warren Harding"},
              {"choice": "Woodrow Wilson", "isAnswer": "true"}
            ]
          }
        ]
      }
    },
    {
      title: "Cat Lady",
      tagLine: "Put your cat knowledge to the test. Pass this quiz and we'll bestow the title of \"Cat Lady\" on you.",
      added: "2015-09-01T18:25:43.511Z",
      _id: 2,
      rating: 4,
      tags: [
        "funny",
        "pop culture",
        "animals"
      ],
      "quiz": {
        "questions": [
          {
            "question": "When you find your cat in your favorite chair, what do you do?",
            "choices": [
              {"choice": "Throw the cat on the floor and sit in the chair."},
              {"choice": "Sigh, and move to another seat."},
              {"choice": "Pull another chair close to the cat and sit in it.", "isAnswer": "true"},
              {"choice": "Cats are not allowed on my furniture."}
            ]
          },
          {
            "question": "What do you call your cats?",
            "choices": [
              {"choice": "My cats"},
              {"choice": "My children", "isAnswer": "true"},
              {"choice": "Those animals"},
              {"choice": "My little cuddly babies"}
            ]
          },
          {
            "question": "What would you do if you saw a stray cat hanging around your yard?",
            "choices": [
              {"choice": "Feed it then take it to the shelter."},
              {"choice": "Call animal control to pick it up."},
              {"choice": "Bring it in, keep it separate from my own cats, then try to find the owner."},
              {
                "choice": "Answer three, but I would adopt it if the owner could not be found.",
                "isAnswer": "true"
              }
            ]
          },
          {
            "question": "You want a kitten and you've found three siblings at the shelter, but you can't choose.",
            "choices": [
              {"choice": "I'd pick the one that matched my furniture best"},
              {"choice": "I only buy pedigreed kittens, don't get them at a shelter."},
              {"choice": "I'd pick the healthiest two."},
              {"choice": "I'd adopt all three. Siblings belong together.", "isAnswer": "true"}
            ]
          },
          {
            "question": "You ran low on money this week. Which will you do?",
            "choices": [
              {
                "choice": "Give up beer and movies this week and buy my cats their regular food.",
                "isAnswer": "true"
              },
              {"choice": "Hamburgers for all this week, including the cats."},
              {"choice": "Get the cheapest cat food I can find at Walmart."},
              {"choice": "Who buys cat food? Cats can eat leftovers"}
            ]
          },
          {
            "question": "You're taking a week's vacation. What will you do with the cats?",
            "choices": [
              {"choice": "Nothing. They're always outside anyway."},
              {
                "choice": "Hire a bonded, professional sitter or a trusted neighbor.",
                "isAnswer": "true"
              },
              {"choice": "Board them at a kennel."},
              {"choice": "Leave them in the house with plenty of dry food and water."}
            ]
          },
          {
            "question": "You got a bonus and have $200 extra to spend. You'll probably:",
            "choices": [
              {"choice": "Buy my spouse a special gift and a few goodies for the cats."},
              {"choice": "Buy my cats that tower I've been eyeing.", "isAnswer": "true"},
              {"choice": "Take my extended family out to dinner."},
              {"choice": "Save it for household expenses."}
            ]
          },
          {
            "question": "Your walls are filled with photos of:",
            "choices": [
              {"choice": "I only hang framed paintings."},
              {"choice": "My cats", "isAnswer": "true"},
              {"choice": "My kids and my cats"},
              {"choice": "Dogs and Horses"}
            ]
          },
          {
            "question": "Where do your cats sleep?",
            "choices": [
              {"choice": "Outdoors"},
              {"choice": "Anywhere they want"},
              {"choice": "In their own designer beds."},
              {"choice": "On my bed.", "isAnswer": "true"}
            ]
          },
          {
            "question": "Have you provided for your cats if you should die?",
            "choices": [
              {"choice": "I think my family will care for them."},
              {"choice": "Yes, I have a trust and a chosen caregiver for them", "isAnswer": "true"},
              {"choice": "I haven't really thought much about it."},
              {"choice": "Cats can take care of themselves."}
            ]
          }
        ]
      }
    }
  ];

@Injectable()
export class QuizService implements IQuizService {

  // returns all of the quizzes
  getQuizzes() {
    return quizList;
  }

  // returns a specific quiz
  getQuiz(id:number) {
    for (let quiz of quizList) {
      if (quiz._id === id) {
        return quiz;
      }
    }
    // probably need better way to deal with no
    return null;
  }
}

console.info('quiz-service.ts');

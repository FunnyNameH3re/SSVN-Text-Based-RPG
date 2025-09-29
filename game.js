// Game data: each step has text, an image, and 4 choices (with feedback and images)
// All images are currently placeholders, insert the actual images in the assets folder and update the file paths accordingly
// Use image links if possible
// Use backticks (next to the 1 key) for convenience, or else the text has to be in one long line or in a different format
// Text will be started in a new line because of the css, so if you want a new line just press enter, the text displayed will follow
// Game data: each step has text, an image, and 4 choices (with feedback and images)
// Game data: All steps are part of the "Family Panic" scenario
const scenarios = {
  "family-panic": {
    steps: [
      {
        text: `Quang is at school with his friend Thao.
               They are both eating beef noodle soup for lunch.
               Thao is hungry after a morning of learning and is eating very fast.
               OH NO! Suddenly, Thao is struggling to breathe! She is choking on noodles!
               What should he do?`,
        image: `assets/pho.jpg`,
        choices: [
          {
            text: `Give abdominal thrust`,
            correct: false,
            feedback: `Give Thao abdominal thrusts using his fists.
                       Oops...
                       This isn't the first thing you should do, you should try back blows first because they are safer and usually work.
                       The Heimlich should only be used if back blows don't help.
                       Quang stood behind Thao, made a fist just above her belly button, and pushed in and up.
                       After a few tries, the noodle popped out and she could breathe again.
                       Tip: Always chew your food properly to avoid choking.`,
            buttonImage: `assets/abdominalthrust.jpg`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Slap her on the back`,
            correct: true,
            feedback: `Slap Hoa on the back.
                       Correct!
                       This is the right thing to do as back blows can help to clear the food/object from the person's airway.
                       Using the palm of your hand, give firm blows between their shoulder blades.
                       It is a safe and effective way to help someone who is choking.`,
            buttonImage: `assets/slapback.jpg`,
            feedbackImage: `assets/correct.png`
          },
          {
            text: `Tell her to drink water`,
            correct: false,
            feedback: `Tell Hoa to drink water.
                       Oops...
                       This is dangerous as it can block the airways more!
                       Someone should only drink water if they are able to cough, swallow, and breathe.`,
            buttonImage: `assets/water.jpg`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Wait for her to stop choking`,
            correct: false,
            feedback: `Wait for Hoa to stop choking.
                       Oops...
                       When someone is choking, they need help quickly!
                       They can lose too much oxygen if time is wasted, and this can be deadly.
                       Serious choking will not go away on its own as the food/object cannot be digested.`,
            buttonImage: `assets/wait.png`,
            feedbackImage: `assets/incorrect.png`
          }
        ]
      },
      {
        text: `Quang and his friend Hoa are playing during recess.
               They notice a snake and try to touch it.
               OH NO!
               Hoa is bitten by the snake.
               What should he do?`,
        image: `assets/snake.jpg`,
        choices: [
          {
            text: `Try to suck out the venom`,
            correct: false,
            feedback: `Try to suck out the venom.
                       Oops...
                       That's not the right thing to do.
                       You shouldn't try to suck out the venom because it is poisonous and can make you sick.
                       It can also spread the venom around the body, which is dangerous.
                       What you want is to keep the poison in one place, so the person should stay still and get help straight away.`,
            buttonImage: `assets/suckvenom.png`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Stay still and calm`,
            correct: true,
            feedback: `Stay still and calm.
                       Correct!
                       Staying still and calm is the best thing to do after a snake bite.
                       Moving around can make the venom spread faster through the body.
                       Keeping calm and not moving helps slow it down until you find an adult and can get medical help.`,
            buttonImage: `assets/staycalm.jpg`,
            feedbackImage: `assets/correct.png`
          },
          {
            text: `Wash the wound and bandage it`,
            correct: false,
            feedback: `Wash the wound with water and bandage it.
                       Oops...
                       That's not the best thing to do.
                       Washing the bite with water can spread the venom, and putting a bandage on it might make it worse by pressing too tightly and affecting blood flow.`,
            buttonImage: `assets/bandage.jpg`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Tell him "it will go away on its own"`,
            correct: false,
            feedback: `Tell him "it will go away on its own".
                       Oops...
                       It would be nice if this was true, but it won't go away on its own.`,
            buttonImage: `assets/leaveitalone.jpg`,
            feedbackImage: `assets/incorrect.png`
          }
        ]
      },
      {
        text: `Quang and his friends decide to go swimming after school.
               Quang's friend Liem is normally a very strong swimmer, but Quang notices that he is drifting further away,
               is out of breath, and is panicking.
               OH NO!
               Liem is at risk of drowning.
               What should Quang do?`,
        image: `assets/river.jpg`,
        choices: [
          {
            text: `Throw something and call for help`,
            correct: true,
            feedback: `Quang throws something Liem can hold in the water and calls for help.
                       Correct, Well done!
                       Liem can hold onto a floating object for buoyancy while Quang calls for help from an adult or lifeguard.
                       An adult was called and was able to pull Liem out of the water!`,
            buttonImage: `assets/throwsomething.png`,
            feedbackImage: `assets/correct.png`
          },
          {
            text: `Jump in to save Liem`,
            correct: false,
            feedback: `Quang jumps in to save Liem.
                       Oops...
                       This could make the situation worse!
                       Quang is putting himself in danger by doing this!`,
            buttonImage: `assets/jumpin.jpg`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Wait for Liem to swim back`,
            correct: false,
            feedback: `Quang waits for Liem to swim back.
                       Oops...
                       That's not the right thing to do!
                       Even though Liem is usually a strong swimmer, he is tired and panicking, he could drown if no one helps quickly.
                       Quang should not wait. Instead, he should call for help straight away by dialing 115.`,
            buttonImage: `assets/swimback.jpg`,
            feedbackImage: `assets/incorrect.png`
          },
          {
            text: `Pray for the river entities`,
            correct: false,
            feedback: `Quang prays for the river entities to spare his friend.
                       Oops...
                       If someone is drowning, they must be immediately removed from the water!
                       Acting quickly is important!`,
            buttonImage: `assets/pray.png`,
            feedbackImage: `assets/incorrect.png`
          }
        ]
      }
    ]
  },
  "url-test": {
    steps: [
      {
        text: `Testing whether the URL Works`,
        image: `assets/ricky.png`,
        choices: [
          {
            text: `Nothin to see here`,
            correct: true,
            feedback: `Yay you did it`,
            buttonImage: `assets/treasure.png`,
            feedbackImage: `assets/bobby.png`,
          }
        ]
      }
    ]
  }
};

// Get the scenario from the URL (default to "family-panic")
const urlParams = new URLSearchParams(window.location.search);
const scenarioId = urlParams.get("scenario") || "family-panic";

// Load the selected scenario
const currentScenario = scenarios[scenarioId];
let currentStep = 0;

// DOM elements
const storyText = document.getElementById("storyText");
const sceneImage = document.getElementById("sceneImage");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");
const feedbackImage = document.getElementById("feedbackImage");
const feedbackText = document.getElementById("feedbackText");
const continueButton = document.getElementById("continueButton");

// Display the current step
function showStep(step) {
  const data = currentScenario.steps[step];
  storyText.textContent = data.text;
  sceneImage.src = data.image;
  choicesDiv.innerHTML = "";
  feedbackDiv.classList.add("hidden");
  continueButton.classList.add("hidden");

  data.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.classList.add("choiceButton");

    // Create a container for the image and text
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("button-content");

    // Add image to the container
    const img = document.createElement("img");
    img.src = choice.buttonImage || "assets/default_button_image.png";
    img.alt = choice.text;
    contentContainer.appendChild(img);

    // Add text to the container
    const text = document.createElement("span");
    text.textContent = choice.text;
    contentContainer.appendChild(text);

    // Append the container to the button
    btn.appendChild(contentContainer);

    btn.dataset.index = index;
    btn.dataset.correct = choice.correct;
    btn.dataset.feedback = choice.feedback;
    btn.dataset.feedbackImage = choice.feedbackImage;
    btn.onclick = () => handleChoice(index, choice.correct, choice.feedback, choice.feedbackImage);
    choicesDiv.appendChild(btn);
  });
}

// Handle player choice
function handleChoice(selectedIndex, isCorrect, feedback, feedbackImagePath) {
  const buttons = choicesDiv.querySelectorAll(".choiceButton");

  // Show feedback for the selected option
  feedbackDiv.classList.remove("hidden");
  feedbackImage.src = feedbackImagePath;
  feedbackText.textContent = feedback;
  feedbackDiv.className = isCorrect ? "correct" : "bobby";

  if (isCorrect) {
    // Highlight the correct button
    buttons[selectedIndex].classList.add("correct-choice");
    buttons.forEach(button => {
      if (button.dataset.correct !== "true") {
        button.onclick = () => {
          feedbackImage.src = button.dataset.feedbackImage;
          feedbackText.textContent = button.dataset.feedback;
          feedbackDiv.className = "bobby";
        };
      }
    });

    // Show the continue button with styling
    continueButton.classList.remove("hidden");
    continueButton.textContent = "Continue";
    continueButton.className = "choiceButton"; // Use the same styling as option buttons
    continueButton.onclick = () => {
      currentStep++;
      if (currentStep < currentScenario.steps.length) {
        showStep(currentStep);
      } else {
        storyText.textContent = "🎉 You finished the adventure!";
        sceneImage.src = "assets/correct.png";
        choicesDiv.innerHTML = "";
        feedbackDiv.classList.add("hidden");
        continueButton.classList.add("hidden");
      }
    };
  } else {
    // Disable all buttons except "Retry"
    buttons.forEach(button => {
      button.disabled = true;
    });

    // Show the retry button with styling
    continueButton.classList.remove("hidden");
    continueButton.textContent = "Retry";
    continueButton.className = "choiceButton retry"; // Use the same styling as option buttons
    continueButton.onclick = () => {
      showStep(currentStep);
    };
  }
}

// Start the game
showStep(currentStep);

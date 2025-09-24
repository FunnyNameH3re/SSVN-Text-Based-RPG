// Game data: each step has text, an image, and 4 choices (with feedback and images)
// All images are currently placeholders, insert the actual images in the assets folder and update the file paths accordingly
// Use image links if possible
// Use backticks (next to the 1 key) for convenience, or else the text has to be in one long line or in a different format
// Text will be started in a new line because of the css, so if you want a new line just press enter, the text displayed will follow
const story = [
  {
    text: `Quang is at school with his friend Thao. 
           They are both eating beef noodle soup for lunch. 
           Thao is hungry after a morning of learning and is eating very fast. 
           OH NO! Suddenly, Thao is struggling to breath! She is choking on noodles! 
           What should he do?`,
    image: `https://www.recipetineats.com/tachyon/2019/04/Beef-Pho_6.jpg?resize=500%2C500`, // Replace with your image path

    // Choices are the options presented to the player
    // Text is the text displayed on the button itself 
    // Adjust whether correct is true or false to adjust the correct option 
    // Feedback is what is shown when the player selects the option, so all of the learning information is inside there
    choices: [
      {
        text: `Give abdominal thrust`,
        correct: false,
        feedback: `Give Thao abdonimal thrusts using his fists. 
                   Oops... 
                   This isn't the first thing you should do, you should try back blows first because they are safer and usually work. 
                   The Heimlich should only be used if back blows don't help. 
                   Quang stood behind Thao, made a fist just above her belly button, and pushed in and up. 
                   After a few tries, the noodle popped out and she could breathe again. 
                   Tip: Always chew your food properly to avoid choking.`,
        buttonImage: `https://upload.wikimedia.org/wikipedia/commons/9/92/Abdominal_thrusts_against_choking_%28cropped%29.jpg`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Slap her on the back`,
        correct: true,
        feedback: `Slap Hoa on the back. 
                   Correct! 
                   This is the right thing to do as back blows can help to clear the food/object from the person's airway
                   Using the palm of your hand, give firm blows between their shoulder blades.
                   It is a safe and effective way to help someone who is choking.`,
        buttonImage: `https://media.istockphoto.com/id/496483694/photo/patient-choking-being-attended-to-by-a-paramedic-nurse.jpg?s=612x612&w=0&k=20&c=c785QD9RMtE87S_TAStkp80MOj4SkbfDdjX8ZQa4hDQ=`,
        feedbackImage: `https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-great-job-labels-for-motivation-png-image_6596463.png` // Replace with your image path
      },
      {
        text: `Tell her to drink water`,
        correct: false,
        feedback: `Tell Hoa to drink water. 
                   Oops... 
                   This is dangerous as it can block the airways more!
                   Someone should only drink water if they are able to cough, swallow and breathe.`,
        buttonImage: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWeeOn0l5588g1qOi5xpcityQlvdQc5RYQsA&s`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Wait for her to stop choking `,
        correct: false,
        feedback: `Wait for Hoa to stop choking.
                   Oops...
                   When someone is choking, they need help quick!
                   They can lose too much oxygen is time is wasted, and this can be deadly.
                   Serious choking will not go away on its own as the food/object cannot be digested`,
        buttonImage: `https://www.cdchk.org/sites/default/files/inline-images/image_8.png`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      }
    ]
  },
  {
    text: `Quang and his friend Hoa are playing during recess. 
           They notice a snake and try to touch it. 
           OH NO! 
           Hoa is bitten by the snake. 
           What should he do?`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaqF-_d2z_9p1oGjqMUuO19izotxzxBhsIQ&s`, // Replace with your image path
    choices: [
      {
        text: `Try to suck out the venom`,
        correct: false,
        feedback: `Try to suck out the venom
                   Oops... 
                   That's not the right thing to do. 
                   You shouldn't try to suck out the venom because it is poisonous and can make you sick. 
                   It can also spread the venom around the body, which is dangerous. 
                   What you want is to keep the poison in one place, so the person should stay still and get help straight away.`,
        buttonImage: `https://i0.wp.com/www.armgeo.am/wp-content/uploads/2020/03/content-1473951836-myth-you-can-suck-the-venom-out-of-a-snakebite.jpg?ssl=1`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Stay still and calm`,
        correct: true,
        feedback: `Stay still and calm
                   Correct!
                   Staying still and calm is the best thing to do after a snake bite. 
                   Moving around can make the venom spread faster through the body.
                   Keeping calm and not moving helps slow it down until you find an adult and can get medical help.`,
        buttonImage: `https://t3.ftcdn.net/jpg/10/20/90/04/360_F_1020900469_CpK6Dhm7Sevg9jfNfR4xnM3w7a8iazEd.jpg`,
        feedbackImage: `https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-great-job-labels-for-motivation-png-image_6596463.png` // Replace with your image path
      },
      {
        text: `Wash the wound and bandage it`,
        correct: false,
        feedback: `Wash the wound with water and bandage it
                   Oops... 
                   That's not the best thing to do. 
                   Washing the bite with water can spread the venom, and putting a bandage on it might make it worse by pressing too tightly and affecting bloodflow.`,
        buttonImage: `https://www.firstaid.co.uk/images/blog/2022/Action%20image/Compression-Bandages-1.jpg`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Tell him "it will go away on its own"`,
        correct: false,
        feedback: `Tell him "it will go away on its own"
                   Oops... 
                   It would be nice if this was true, but it won't go away on its own`,
        buttonImage: `https://f4.bcbits.com/img/0005108414_10.jpg`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      }
    ]
  },
  {
    text: `Quang and his friends decide to go swimming after school. 
           Quang's friend Liem is normally a very strong swimmer, but Quang notices that he is drifting drifting further away,
           is out of breath and is panicking. 
           OH NO!
           Liem is at risk of drowning. 
           What should Quang do?`,
    image: `https://freshwaterhabitats.b-cdn.net/app/uploads/2023/08/iStock-1001529608-scaled.jpg?width=850&quality=85`, // Replace with your image path
    choices: [
      {
        text: `Throw something and call for help`,
        correct: true,
        feedback: `Quang throws something Liem can hold in the water and calls for help
                   Correct, Well done!
                   Liem can hold onto a floating object for bouyancy whilst Quang calls for help from an adult or lifeguard. 
                   An adult was called and was able to pull Liem out of the water!`,
        buttonImage: `https://cdn.pixabay.com/photo/2012/04/14/16/33/lifesaver-34525_1280.png`,
        feedbackImage: `https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-great-job-labels-for-motivation-png-image_6596463.png` // Replace with your image path
      },
      {
        text: `Jump in to save Liem`,
        correct: false,
        feedback: `Quang jumps in to save Liem
                   Oops... 
                   This could make the situation worse!
                   Quang is putting himself in danger by doing this!`,
        buttonImage: `https://my.vanderbilthealth.com/wp-content/uploads/2021/06/divingrisks_640x640.jpg`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Wait for Liem to swim back`,
        correct: false,
        feedback: `Quang waits for Liem to swim back
                   Oops... 
                   That's not the right thing to do! 
                   Even though Liem is usually a strong swimmer, he is tired and panicking, he could drown if no one helps quickly
                   Quang should not wait. Instead, he should call for help straight away by dialing 115. `,
        buttonImage: `https://img.freepik.com/free-vector/teenage-boy-swimming-blue-water_1308-132882.jpg?semt=ais_incoming&w=740&q=80`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      },
      {
        text: `Pray for the river entities`,
        correct: false,
        feedback: `Quang prays for the river entities to spare his friend
                   Oops...
                   If someone is drowning, they must be immediately removed from the water!
                   Acting quick is important!`,
        buttonImage: `https://images.emojiterra.com/google/android-12l/512px/1f64f.png`,
        feedbackImage: `https://thumbs.dreamstime.com/b/try-again-red-rubber-stamp-over-white-background-88003842.jpg` // Replace with your image path
      }
    ]
  }
];

let currentStep = 0;
let correctOptionSelected = false;

// DOM elements
const storyText = document.getElementById("storyText");
const sceneImage = document.getElementById("sceneImage");
const choicesDiv = document.getElementById("choices");
const feedbackDiv = document.getElementById("feedback");
const feedbackImage = document.getElementById("feedbackImage");
const feedbackText = document.getElementById("feedbackText");
const continueButton = document.getElementById("continueButton");

function showStep(step) {
  const data = story[step];
  storyText.textContent = data.text;
  sceneImage.src = data.image;
  choicesDiv.innerHTML = "";
  feedbackDiv.classList.add("hidden");
  continueButton.classList.add("hidden");
  correctOptionSelected = false;

  data.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.classList.add("choiceButton");
    btn.dataset.index = index;
    btn.dataset.correct = choice.correct;
    btn.dataset.feedback = choice.feedback;
    btn.dataset.feedbackImage = choice.feedbackImage;

    // Add image to button
    const img = document.createElement("img");
    img.src = choice.buttonImage || "assets/default_button_image.png"; // Add a default image or use a specific image for each button
    img.alt = choice.text;
    btn.appendChild(img);

    // Add text to button
    const text = document.createElement("span");
    text.textContent = choice.text;
    btn.appendChild(text);

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
    correctOptionSelected = true;

    // Allow clicking other options to see their feedback
    buttons.forEach(button => {
      if (button.dataset.correct !== "true") {
        button.onclick = () => {
          feedbackImage.src = button.dataset.feedbackImage;
          feedbackText.textContent = button.dataset.feedback;
          feedbackDiv.className = "bobby";
        };
      }
    });

    // Show the continue button
    continueButton.classList.remove("hidden");
    continueButton.textContent = "Continue";
    continueButton.onclick = () => {
      currentStep++;
      if (currentStep < story.length) {
        showStep(currentStep);
      } else {
        // Clear choices and show completion message
        storyText.textContent = "🎉 You finished the adventure!";
        sceneImage.src = "https://png.pngtree.com/png-vector/20230213/ourmid/pngtree-great-job-labels-for-motivation-png-image_6596463.png";
        choicesDiv.innerHTML = ""; // Clear all choices
        feedbackDiv.classList.add("hidden");
        continueButton.classList.add("hidden");
      }
    };
  } else {
    // Disable all buttons except "Retry"
    buttons.forEach(button => {
      button.disabled = true;
    });

    // Show the retry button
    continueButton.classList.remove("hidden");
    continueButton.textContent = "Retry";
    continueButton.className = "retry";
    continueButton.onclick = () => {
      showStep(currentStep);
    };
  }
}

// Start the game
showStep(currentStep);
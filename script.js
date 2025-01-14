document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-parent");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      const queryString = new URLSearchParams(data).toString();
      window.location.href = `details.html?${queryString}`;
    });
  }
});
document
  .getElementById("showContent")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of the link
    var hiddenContent = document.getElementById("hidden-content");
    var hiddenContent2 = document.getElementById("hidden-content2");

    if (
      hiddenContent.style.display === "block" &&
      hiddenContent2.style.display === "block"
    ) {
      hiddenContent.style.display = "none";
      hiddenContent2.style.display = "none";
    } else {
      hiddenContent.style.display = "block";
      hiddenContent2.style.display = "block";
    }
  });

function toggleDisplay(checkboxId, paragraphId) {
  var checkBox = document.getElementById(checkboxId);
  var para = document.getElementById(paragraphId);

  if (checkBox.checked) {
    para.style.display = "block"; // Show the paragraph if the checkbox is checked
  } else {
    para.style.display = "none"; // Hide the paragraph if the checkbox is not checked
  }
}

// Adding event listeners to the checkboxes
document
  .getElementById("flexSwitchCheckChecked1")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked1", "para1");
  });

document
  .getElementById("flexSwitchCheckChecked2")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked2", "para2");
  });

document
  .getElementById("flexSwitchCheckChecked3")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para3");
  });
document
  .getElementById("flexSwitchCheckChecked4")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para4");
  });
document
  .getElementById("flexSwitchCheckChecked5")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para5");
  });
document
  .getElementById("flexSwitchCheckChecked6")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para6");
  });
document
  .getElementById("flexSwitchCheckChecked7")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para7");
  });
document
  .getElementById("flexSwitchCheckChecked8")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para8");
  });
document
  .getElementById("flexSwitchCheckChecked9")
  .addEventListener("click", function () {
    toggleDisplay("flexSwitchCheckChecked3", "para9");
  });
//   document.getElementById('createCV').addEventListener('click', function() {
//     const sections = ['interest', 'achievements', 'activities', 'languages', 'additional-info', 'reference', 'signature', 'projects', 'cover-letter'];
//     let cvContent = '';

//     sections.forEach(section => {
//         const checkbox = document.getElementById(`flexSwitchCheckChecked${sections.indexOf(section) + 1}`);
//         if (checkbox && checkbox.checked) {
//             const content = document.getElementById(`para${sections.indexOf(section) + 1}`).textContent;
//             cvContent += `<p>${content}</p>`;
//         }
//     });

//     document.getElementById('cvDetails').innerHTML = cvContent;
// });

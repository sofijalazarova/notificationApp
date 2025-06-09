function showNotification(titleText, messageText, type) {
  if (type === "permanent") {
    const maincontainer = document.getElementsByClassName("grid-item-4")[0];

    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("notification-container");
    const notificationBox = document.createElement("div");
    notificationBox.classList.add("notification-box");

    const title = document.createElement("h4");
    title.textContent = titleText;
    const notificationContent = document.createElement("div");
    notificationContent.classList.add("notification-content");

    const message = document.createElement("p");
    message.textContent = messageText;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "X";
    closeBtn.classList.add("close-btn");
    closeBtn.onclick = () => notificationContainer.remove();

    notificationContent.appendChild(message);
    notificationContent.appendChild(closeBtn);

    notificationBox.appendChild(title);
    notificationBox.appendChild(notificationContent);
    notificationContainer.appendChild(notificationBox);
    maincontainer.appendChild(notificationContainer);
  }

  if (type === "temporary") {
    const maincontainer = document.getElementsByClassName("grid-item-6")[0];

    const notificationContainer = document.createElement("div");
    notificationContainer.classList.add("notification-container");
    const notificationBox = document.createElement("div");
    notificationBox.classList.add("notification-box");

    const title = document.createElement("h4");
    title.textContent = titleText;
    const notificationContent = document.createElement("div");
    notificationContent.classList.add("notification-content");

    const message = document.createElement("p");
    message.textContent = messageText;

    notificationContent.appendChild(message);

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    notificationBox.appendChild(title);
    notificationBox.appendChild(notificationContent);
    notificationBox.appendChild(progressBar);
    notificationContainer.appendChild(notificationBox);
    maincontainer.appendChild(notificationContainer);

    setTimeout(() => {
      notificationContainer.remove();
    }, 9000);
  }
}

window.onload = function () {
  showNotification(
    "Very important title of the notification",
    "Notification may extend two across lines. We prefer to keep them concise.",
    "permanent"
  );
  showNotification(
    "Very important title of the notification",
    "Notification may extend two across lines. We prefer to keep them concise.",
    "temporary"
  );
};

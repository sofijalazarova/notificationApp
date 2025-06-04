function showNotification(
  message,
  title = "",
  type = "temporary",
  duration = 5000
) {
  const container = document.getElementById("notification-container");
  const label = document.createElement("div");
  label.classList.add("notification-label");
  label.textContent = type.charAt(0).toUpperCase() + type.slice(1);

  const notification = document.createElement("div");
  notification.classList.add("notification");

  const notificationTitle = document.createElement("h4");
  notificationTitle.textContent = title;
  notification.appendChild(notificationTitle);

  const notificationMessage = document.createElement("p");
  notificationMessage.textContent = message;
  notification.appendChild(notificationMessage);

  if (type === "permanent") {
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close-btn");
    closeButton.onclick = () => {
      container.removeChild(notification);
    };
    notification.appendChild(closeButton);
  }

  if (type === "temporary") {
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.style.animationDuration = `${duration}ms`;
    notification.appendChild(progressBar);

    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => {
        container.removeChild(notification);
      }, 300);
    }, duration);
  }

  container.appendChild(label);
  container.appendChild(notification);
}

showNotification(
  "Notification may extend two across lines. We prefer to keep them concise.",
  "Very important title of the notification",
  "permanent"
);
showNotification(
  "Notification may extend two across lines. We prefer to keep them concise.",
  "",
  "temporary"
);

function clearConsole() {
  console.clear()
}

function changeStatus(taskNumber, status) {
  const elem = document.querySelector(`span#task0${taskNumber}Status`);
  elem.textContent = status;
  elem.className = `status-${status}`;
}
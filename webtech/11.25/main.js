document.addEventListener("DOMContentLoaded", () => {
  const testContainer = document.querySelector(".test-container");
  const flexDirSelect = document.querySelector(".flex-direction-select");

  const changeFlexDir = (event) => {
    const flexValue = event.currentTarget.value;
    testContainer.style.flexDirection = flexValue;
  };

  flexDirSelect.addEventListener("change", changeFlexDir);
});

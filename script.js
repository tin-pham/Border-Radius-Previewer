class UI {
  // Change the Shape
  static changeShape(value, unit) {
    let shape = document.querySelector('.shape');
    shape.style.borderRadius = value + unit;
  }

  //   Change the input value

  // Hide the all & show the specific
  static hideAllShowSpecific() {
    document.getElementById('around-input').style.display = 'none';
    document.getElementById('specific-input').style.display = 'inline-block';
  }
  // Hide the specific & show the all
  static hideSpecificShowAll() {
    document.getElementById('specific-input').style.display = 'none';
    document.getElementById('around-input').style.display = 'inline-block';
  }

  static isAllNone() {
    return document.getElementById('around-input').style.display == 'none';
  }

  // Get the Value
  static getTheValue(name, select) {
    name = document.getElementById(`${select}`);
    let value = name.value;
    return value;
  }
  // Get the Unit
  static getTheUnit() {
    // Get the unit
    let units = document.querySelectorAll('[type="radio"]');
    // Which unit is checked
    let selectedUnit;
    for (let unit of units) {
      if (unit.checked) {
        selectedUnit = unit.value;
      }
    }
    return selectedUnit;
  }

  // Get the 4 corner
  static change4CornerValue(unit) {
    const topLeft = this.getTheValue('topLeft', 'top-left');
    const topRight = this.getTheValue('topRight', 'top-right');
    const bottomLeft = this.getTheValue('bottomLeft', 'bottom-left');
    const bottomRight = this.getTheValue('bottomRight', 'bottom-right');

    let shape = document.querySelector('.shape');
    shape.style.borderRadius = `${topLeft}${unit} ${topRight}${unit} ${bottomLeft}${unit} ${bottomRight}${unit}`;
  }
}

const button = document.querySelector('#change-button');
// Event: Change Shape All
button.addEventListener('click', (e) => {
  if (!UI.isAllNone()) {
    // Get the value
    let value = document.getElementById('around').value;
    let selectedUnit = UI.getTheUnit();

    UI.changeShape(value, selectedUnit);
  } else {
    let selectedUnit = UI.getTheUnit();
    UI.change4CornerValue(selectedUnit);
  }
});

// Event: Change Shape Specific

// Event: Hide & Show input type
//   2 Button
const allButton = document.getElementById('all');
const specificButton = document.getElementById('specific');

// In default the All Type show
UI.hideSpecificShowAll();

// Hide All Type
specificButton.addEventListener('click', () => {
  UI.hideAllShowSpecific();
});

// Hide Specific Type
allButton.addEventListener('click', () => {
  UI.hideSpecificShowAll();
});

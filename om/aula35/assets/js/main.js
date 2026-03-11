function main() {
  const form = document.querySelector('form');
  let resultSection = null;

  function createResultSection() {
    const body = document.querySelector('body');
    const newSection = document.createElement('section');
    newSection.setAttribute('class', 'container');

    body.appendChild(newSection);
    return newSection;
  }

  function updateResultSection(tag, tagContent) {
    const newTag = document.createElement(tag);
    newTag.innerHTML = tagContent;
    resultSection.appendChild(newTag);
  }

  function checkInputs(tag, tagContent) {
    if (tag == '' || tagContent == '') {
      alert('Não deixe os campos vázios ou sem selecionar');
      return false;
    }
    return true;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const tag = document.querySelector("select[name='tag']").value;
    const tagContent = document.querySelector('textarea').value;
    if (!checkInputs(tag, tagContent)) return;

    if (resultSection == null) resultSection = createResultSection();

    updateResultSection(tag, tagContent);
  });
}

main();

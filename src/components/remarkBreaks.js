import {findAndReplace} from 'mdast-util-find-and-replace';

function remarkBreaks() {
  function replace(match) {
    return {
      type: 'text',
      data: {
        hName: 'br',
      },
    };
  }

  function transform(markdownAST) {
    findAndReplace(markdownAST, /\n/g, replace);
    return markdownAST;
  }

  return transform;
}

export default remarkBreaks;
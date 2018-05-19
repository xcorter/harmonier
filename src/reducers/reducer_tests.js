let test = null;

function getTests() {
  return [
    {
      "id": 1,
      "source": "/audio/1.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": true, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 2,
      "source": "/audio/2.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": true, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 3,
      "source": "/audio/c_ton.mp3",
      "success": null,
      "choices": [
        {"is_correct": true, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 4,
      "source": "/audio/d_ton.mp3",
      "success": null,
      "choices": [
        {"is_correct": true, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 5,
      "source": "/audio/d_sub.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": true, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 6,
      "source": "/audio/d_dom.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": true, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 7,
      "source": "/audio/a_ton.mp3",
      "success": null,
      "choices": [
        {"is_correct": true, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 8,
      "source": "/audio/a_sub.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": false, "text": "Доминанта"},
        {"is_correct": true, "text": "Субдоминанта"}
      ]
    },
    {
      "id": 9,
      "source": "/audio/a_dom.mp3",
      "success": null,
      "choices": [
        {"is_correct": false, "text": "Тоника"},
        {"is_correct": true, "text": "Доминанта"},
        {"is_correct": false, "text": "Субдоминанта"}
      ]
    }
  ]
}

function getTest() {
  let tests = getTests();
  let test = tests[Math.floor(Math.random() * tests.length)];
  return test;
}

export default function (state = null, action) {
  if (test === null) {
    test = getTest();
  }
  switch (action.type) {
    case 'CHECK_ANSWER':
      state.success = action.success;
      return {
        ...state,
        success: action.success
      };
    case 'NEXT_TEST':
      test = getTest();
      return test;
  }
  return test;
}

report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_1024px.png",
        "test": "../bitmaps_test/20211117-161949/Entire_document_1024px.png",
        "selector": "document",
        "fileName": "Entire_document_1024px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -14
          },
          "misMatchPercentage": "2.26",
          "analysisTime": 39
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Entire_document_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Entire_document_720px.png",
        "test": "../bitmaps_test/20211117-161949/Entire_document_720px.png",
        "selector": "document",
        "fileName": "Entire_document_720px.png",
        "label": "Entire document",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -14
          },
          "misMatchPercentage": "2.68",
          "analysisTime": 42
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Entire_document_720px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_1024px.png",
        "test": "../bitmaps_test/20211117-161949/Big_search_bar_data-qa_big_1024px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_1024px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -12
          },
          "misMatchPercentage": "5.26",
          "analysisTime": 22
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Big_search_bar_data-qa_big_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Big_search_bar_data-qa_big_720px.png",
        "test": "../bitmaps_test/20211117-161949/Big_search_bar_data-qa_big_720px.png",
        "selector": "[data-qa=\"big\"]",
        "fileName": "Big_search_bar_data-qa_big_720px.png",
        "label": "Big search bar data-qa_big",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -12
          },
          "misMatchPercentage": "5.95",
          "analysisTime": 23
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Big_search_bar_data-qa_big_720px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_1024px.png",
        "test": "../bitmaps_test/20211117-161949/Small_search_bar_data-qa_small_1024px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_1024px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "1024px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "9.49",
          "analysisTime": 18
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Small_search_bar_data-qa_small_1024px.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Small_search_bar_data-qa_small_720px.png",
        "test": "../bitmaps_test/20211117-161949/Small_search_bar_data-qa_small_720px.png",
        "selector": "[data-qa=\"small\"]",
        "fileName": "Small_search_bar_data-qa_small_720px.png",
        "label": "Small search bar data-qa_small",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/search-bar-airbnb/",
        "expect": 0,
        "viewportLabel": "720px",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "10.50",
          "analysisTime": 9
        },
        "diffImage": "../bitmaps_test/20211117-161949/failed_diff_Small_search_bar_data-qa_small_720px.png"
      },
      "status": "fail"
    }
  ]
});
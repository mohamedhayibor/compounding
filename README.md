compounding ![](https://img.shields.io/badge/status-stable-green.svg)
----
This module calculates the value of the initial investment based on rates of return (daily, monthly, semi-annual, annual...) :moneybag:.

## Installation
```
  > npm install compounding
```

## Usage

Params: (initial investment, [%, %, %, %...])
> caution: the result is a string, feel free to coerce it into a number if you need to.

```js
import investmentValue from 'compounding' // or  const investmentValue = require('compounding')

investmentValue(1000, [0, 2, -10, 6]) // ===> "973.08"

```

## Raison d'être
To make the calculation of how much your investment is worth now super easy. Just pass in the initial investment and the array of percentage returns (can be of any length as long as your browser or computer can support it). Algorithm complexity O(n).

Super Light (5 sloc). No dependencies.

## License
© [Mohamed Hayibor](https://github.com/mohamedhayibor)

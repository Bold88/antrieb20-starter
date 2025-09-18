"use client";
import Player from "lottie-react";
// Test-Animation von LottieFiles (funktioniert garantiert)
const testAnimation = {
  "v": "5.7.4",
  "fr": 30,
  "ip": 0,
  "op": 60,
  "w": 200,
  "h": 200,
  "nm": "Checkmark",
  "ddd": 0,
  "assets": [],
  "layers": [
    {
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Check",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 0, "k": 0 },
        "p": { "a": 0, "k": [100, 100, 0] },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 0, "k": [100, 100, 100] }
      },
      "ao": 0,
      "shapes": [
        {
          "ty": "sh",
          "ks": {
            "a": 0,
            "k": {
              "i": [ [0, 0], [0, 0] ],
              "o": [ [0, 0], [0, 0] ],
              "v": [ [0, 0], [40, 40] ],
              "c": false
            }
          },
          "nm": "Pfad"
        }
      ],
      "ip": 0,
      "op": 60,
      "st": 0,
      "bm": 0
    }
  ],
  "markers": []
};

export default function PdfLottie() {
  return (
    <div className="w-80 h-80 flex items-center justify-center">
      <Player
        autoplay
        loop
        animationData={testAnimation}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

import { GPGPUProgram } from './gpgpu_math';
export declare class UnaryOpProgram implements GPGPUProgram {
    variableNames: string[];
    userCode: string;
    outputShape: number[];
    constructor(aShape: number[], opSnippet: string);
}
export declare const ABS = "\n  return abs(x);\n";
export declare const RELU: string;
export declare const ELU = "\n  return (x >= 0.0) ? x : (exp(x) - 1.0);\n";
export declare const ELU_DER = "\n  return (x >= 0.0) ? 1.0 : exp(x);\n";
export declare const SELU = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = 1.7580993408473768599402175208123;\n  float scale = 1.0507009873554804934193349852946;\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
export declare function LEAKY_RELU(alpha: number): string;
export declare function STEP(alpha?: number): string;
export declare const NEG = "\n  return -x;\n";
export declare const CEIL = "\n  return ceil(x);\n";
export declare const FLOOR = "\n  return floor(x);\n";
export declare const EXP = "\n  return exp(x);\n";
export declare const LOG = "\n  return log(x);\n";
export declare const SQRT: string;
export declare const SIGMOID = "\n  return 1.0 / (1.0 + exp(-1.0 * x));\n";
export declare const SIN: string;
export declare const COS: string;
export declare const TAN = "\n  return tan(x);\n";
export declare const ASIN: string;
export declare const ACOS: string;
export declare const ATAN: string;
export declare const SINH = "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n";
export declare const COSH = "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n";
export declare const TANH = "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n";
export declare const SQUARE = "\n  return x * x;\n";
export declare const TO_INT = "\n  return float(int(x));\n";
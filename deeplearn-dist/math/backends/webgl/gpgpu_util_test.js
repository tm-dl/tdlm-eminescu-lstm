"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gpgpu_context_1 = require("./gpgpu_context");
var gpgpu_util = require("./gpgpu_util");
describe('gpgpu_util createWebGLContext', function () {
    var gpgpu;
    beforeEach(function () {
        gpgpu = new gpgpu_context_1.GPGPUContext();
    });
    afterEach(function () {
        gpgpu.dispose();
    });
    it('disables DEPTH_TEST and STENCIL_TEST', function () {
        expect(gpgpu.gl.getParameter(gpgpu.gl.DEPTH_TEST)).toEqual(false);
        expect(gpgpu.gl.getParameter(gpgpu.gl.STENCIL_TEST)).toEqual(false);
    });
    it('disables BLEND', function () {
        expect(gpgpu.gl.getParameter(gpgpu.gl.BLEND)).toEqual(false);
    });
    it('disables DITHER, POLYGON_OFFSET_FILL', function () {
        expect(gpgpu.gl.getParameter(gpgpu.gl.DITHER)).toEqual(false);
        expect(gpgpu.gl.getParameter(gpgpu.gl.POLYGON_OFFSET_FILL)).toEqual(false);
    });
    it('enables CULL_FACE with BACK', function () {
        expect(gpgpu.gl.getParameter(gpgpu.gl.CULL_FACE)).toEqual(true);
        expect(gpgpu.gl.getParameter(gpgpu.gl.CULL_FACE_MODE))
            .toEqual(gpgpu.gl.BACK);
    });
    it('enables SCISSOR_TEST', function () {
        expect(gpgpu.gl.getParameter(gpgpu.gl.SCISSOR_TEST)).toEqual(true);
    });
});
describe('gpgpu_util createMatrixTexture', function () {
    it('sets the TEXTURE_WRAP S+T parameters to CLAMP_TO_EDGE', function () {
        var gpgpu = new gpgpu_context_1.GPGPUContext();
        var tex = gpgpu_util.createMatrixTexture(gpgpu.gl, 32, 32);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, tex);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_WRAP_S))
            .toEqual(gpgpu.gl.CLAMP_TO_EDGE);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_WRAP_T))
            .toEqual(gpgpu.gl.CLAMP_TO_EDGE);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, null);
        gpgpu.deleteMatrixTexture(tex);
        gpgpu.dispose();
    });
    it('sets the TEXTURE_[MIN|MAG]_FILTER parameters to NEAREST', function () {
        var gpgpu = new gpgpu_context_1.GPGPUContext();
        var tex = gpgpu_util.createMatrixTexture(gpgpu.gl, 32, 32);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, tex);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_MIN_FILTER))
            .toEqual(gpgpu.gl.NEAREST);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_MAG_FILTER))
            .toEqual(gpgpu.gl.NEAREST);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, null);
        gpgpu.deleteMatrixTexture(tex);
        gpgpu.dispose();
    });
});
describe('gpgpu_util createPackedMatrixTexture', function () {
    it('sets the TEXTURE_WRAP S+T parameters to CLAMP_TO_EDGE', function () {
        var gpgpu = new gpgpu_context_1.GPGPUContext();
        var tex = gpgpu_util.createPackedMatrixTexture(gpgpu.gl, 32, 32);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, tex);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_WRAP_S))
            .toEqual(gpgpu.gl.CLAMP_TO_EDGE);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_WRAP_T))
            .toEqual(gpgpu.gl.CLAMP_TO_EDGE);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, null);
        gpgpu.deleteMatrixTexture(tex);
        gpgpu.dispose();
    });
    it('sets the TEXTURE_[MIN|MAG]_FILTER parameters to NEAREST', function () {
        var gpgpu = new gpgpu_context_1.GPGPUContext();
        var tex = gpgpu_util.createPackedMatrixTexture(gpgpu.gl, 32, 32);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, tex);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_MIN_FILTER))
            .toEqual(gpgpu.gl.NEAREST);
        expect(gpgpu.gl.getTexParameter(gpgpu.gl.TEXTURE_2D, gpgpu.gl.TEXTURE_MAG_FILTER))
            .toEqual(gpgpu.gl.NEAREST);
        gpgpu.gl.bindTexture(gpgpu.gl.TEXTURE_2D, null);
        gpgpu.deleteMatrixTexture(tex);
        gpgpu.dispose();
    });
});
//# sourceMappingURL=gpgpu_util_test.js.map
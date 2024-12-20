import { AnimationClip, Camera, FileLoader, Loader, LoadingManager, SkinnedMesh } from "three";

export interface MMDLoaderAnimationObject {
    animation: AnimationClip;
    mesh: SkinnedMesh;
}

/**
 * @deprecated The module has been deprecated and will be removed with r172. Please migrate to
 * https://github.com/takahirox/three-mmd-loader instead.
 */
export class MMDLoader extends Loader<SkinnedMesh> {
    constructor(manager?: LoadingManager);
    animationBuilder: object;
    animationPath: string;
    loader: FileLoader;
    meshBuilder: object;
    parser: object | null;

    loadAnimation(
        url: string,
        object: SkinnedMesh | Camera,
        onLoad: (object: SkinnedMesh | AnimationClip) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadPMD(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadPMX(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadVMD(
        url: string,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadVPD(
        url: string,
        isUnicode: boolean,
        onLoad: (object: object) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    loadWithAnimation(
        url: string,
        vmdUrl: string | string[],
        onLoad: (object: MMDLoaderAnimationObject) => void,
        onProgress?: (event: ProgressEvent) => void,
        onError?: (event: ErrorEvent) => void,
    ): void;
    setAnimationPath(animationPath: string): this;
}

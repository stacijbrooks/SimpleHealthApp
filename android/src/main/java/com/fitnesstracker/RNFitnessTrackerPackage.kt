package com.simplehealthapp

import android.view.View
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ReactShadowNode
import com.facebook.react.uimanager.ViewManager

class RNsimplehealthappPackage : ReactPackage {

    override fun createViewManagers(reactContext: ReactApplicationContext): MutableList<ViewManager<out View, out ReactShadowNode<*>>> {
        return mutableListOf()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext):
            MutableList<NativeModule> {
        val modules: MutableList<NativeModule> = mutableListOf()

        modules.add(RNsimplehealthappModule(reactContext))
        return modules
    }
}

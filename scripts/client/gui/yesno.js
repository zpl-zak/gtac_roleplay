let yesNoDialog = {
	window: null,
	messageLabel: null,
	yesButton: null,
	noButton: null,
};

// ===========================================================================

function initYesNoDialogGUI() {
    logToConsole(LOG_DEBUG, `[VRR.GUI] Created prompt GUI ...`);
    yesNoDialog.window = mexui.window(game.width/2-200, game.height/2-70, 400, 140, 'Question', {
        main: {
            backgroundColour: toColour(windowColour[0], windowColour[1], windowColour[2], windowColour[3]),
            transitionTime: 500,
        },
        title: {
            textSize: 11.0,
            textColour: toColour(0, 0, 0, 255),
            backgroundColour: toColour(primaryColour[0], primaryColour[1], primaryColour[2], windowTitleAlpha),
        },
        icon: {
            textSize: 0.0,
            textColour: toColour(0, 0, 0, 0),
            backgroundColour: toColour(0, 0, 0, 0),
        },
    });

    yesNoDialog.messageLabel = yesNoDialog.window.text(15, 50, 370, 20, 'Would you like to answer this question?', {
        main: {
            textSize: 10.0,
            textAlign: 0.5,
            textColour: toColour(255, 255, 255, 255),
            textFont: robotoFont,
        },
        focused: {
            borderColour: toColour(0, 0, 0, 0),
        },
    });

    yesNoDialog.yesButton = yesNoDialog.window.button(20, 95, 175, 30, 'YES', {
        main: {
            backgroundColour: toColour(primaryColour[0], primaryColour[1], primaryColour[2], buttonAlpha),
            textColour: toColour(0, 0, 0, 255),
            textSize: 10.0,
            textFont: robotoFont,
            textAlign: 0.5,
        },
        focused: {
            borderColour: toColour(primaryColour[0], primaryColour[1], primaryColour[2], 255),
        },
    }, yesNoDialogAnswerYes);

    yesNoDialog.noButton = yesNoDialog.window.button(205, 95, 175, 30, 'NO', {
        main: {
            backgroundColour: toColour(primaryColour[0], primaryColour[1], primaryColour[2], buttonAlpha),
            textColour: toColour(0, 0, 0, 255),
            textSize: 10.0,
            textFont: robotoFont,
            textAlign: 0.5,
        },
        focused: {
            borderColour: toColour(primaryColour[0], primaryColour[1], primaryColour[2], 255),
        },
    }, yesNoDialogAnswerNo);
    logToConsole(LOG_DEBUG, `[VRR.GUI] Created prompt GUI`);
}

// ===========================================================================

function showYesNoPromptGUI(promptMessage, promptTitle) {
	closeAllWindows();
	logToConsole(LOG_DEBUG, `[VRR.GUI] Showing prompt window. Prompt: ${promptTitle} - ${promptMessage}`);
	mexui.setInput(true);
	yesNoDialog.messageLabel.text = promptMessage;
	yesNoDialog.window.shown = true;
}

// ===========================================================================

function yesNoDialogAnswerNo() {
	logToConsole(LOG_DEBUG, `[VRR.GUI] Responding with answer NO to server prompt`);
	triggerNetworkEvent("vrr.promptAnswerNo");
	closeAllWindows();
}

// ===========================================================================

function yesNoDialogAnswerYes() {
	logToConsole(LOG_DEBUG, `[VRR.GUI] Responding with answer YES to server prompt`);
	triggerNetworkEvent("vrr.promptAnswerYes");
	closeAllWindows();
}

// ===========================================================================
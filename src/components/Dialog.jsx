import { useState, useCallback, useEffect, useMemo, useRef } from "react";

const Dialog = ({ children, open, allowClose, onChange, ...rest }) => {
	const dialog = useRef(null);

	useEffect(() => {
		if (!dialog.current) return;
		let root = document.querySelector("#root");
		if (!root) return;
		let container = root.querySelector(".dialog-container");
		if (!container) {
			container = document.createElement('div');
			container.classList.add('dialog-container');
			root.append(container);
		}

		container.append(dialog.current);
	}, [dialog]);

	const props = useMemo(() => {
		const props = {
			...rest
		};

		if (open) {
			props.className = "visible";
		}

		return props;
	}, [open]);

	const onClickBackdrop = useCallback(() => {
		if (allowClose) {
			onChange(false);
		}
	}, [allowClose, onChange]);

	return (
		<div ref={dialog} data-comp="Dialog" {...props}>
			<div onClick={onClickBackdrop} className="dialog-backdrop"></div>
			<div className="dialog-content">
				{children}
			</div>
		</div>
	);
}

export default Dialog;
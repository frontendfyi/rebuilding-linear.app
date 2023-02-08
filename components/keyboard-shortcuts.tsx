"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button, Highlight } from "./button";
import { KeyboardIllustration } from "./illustrations/keyboard";

const shortcuts = [
  { text: "Check stock level", keys: "⌘k" },
  { text: "Show unvalidated cell", keys: "i" },
  { text: "Order new items", keys: "a" },
  { text: "Change cell status", keys: "s" },
  { text: "Set item priority", keys: "p" },
  { text: "Generate allergence labels", keys: "l" },
  { text: "Turn off operations", keys: "⇧d" },
  { text: "Set alert", keys: "⇧⌘p" },
  { text: "Add sub-alert", keys: "⇧⌘o" },
  { text: "Update menu items", keys: "c" },
  { text: "Create new items", keys: "⌥c" },
  { text: "Select other venue locations", keys: "⇧p" },
];

export const KeyboardShortcuts = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const illustrationWrapperRef = useRef<HTMLDivElement>(null);
  const activeShortcutIndex = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextShortcut, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToShortcut = (index: number) => {
    clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector<HTMLButtonElement>(
      `button:nth-child(${index + 1})`
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));

    const keys = shortcut.dataset.keys || "";
    const keyArray = keys.split("");
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );

    keyElements.forEach((element) => element?.classList.add("active"));

    activeShortcutIndex.current = index;
    scheduleTimeout();
  };

  const goToNextShortcut = () =>
    goToShortcut((activeShortcutIndex.current + 1) % shortcuts.length);

  const onShortcutButtonClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    goToShortcut(Number(ev.currentTarget.dataset.index));
  };

  return (
    <>
      <div
        ref={illustrationWrapperRef}
        className="mask-keyboard absolute top-0 -left-12 h-full max-h-[30rem] w-[200%] md:relative md:left-auto md:w-full"
      >
        <KeyboardIllustration />
      </div>
      <div className="my-7 hidden min-h-[4rem] w-full overflow-hidden md:block">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex min-h-[4rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
        >
          {shortcuts.map((shortcut, index) => (
            <Button
              className="shrink-0 snap-center first:ml-[50vw] last:mr-[50vw]"
              key={shortcut.text}
              data-index={index}
              data-keys={shortcut.keys}
              onClick={onShortcutButtonClick}
              variant="secondary"
            >
              <Highlight className="uppercase">{shortcut.keys}</Highlight>
              {shortcut.text}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

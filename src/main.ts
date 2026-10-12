import Phaser from 'phaser';
import { GAME_CONFIG } from './config';
import { TestScene } from './scenes/TestScene';

// 게임의 전체 환경 설정
const phaserConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO, // 브라우저 환경에 맞춰 WebGL 또는 Canvas로 자동 실행
  width: GAME_CONFIG.width,
  height: GAME_CONFIG.height,
  backgroundColor: GAME_CONFIG.backgroundColor,
  parent: GAME_CONFIG.parent,
  scene: [TestScene], // 실행할 화면(씬) 목록
};

// 게임 인스턴스(실행 객체) 시작
new Phaser.Game(phaserConfig);

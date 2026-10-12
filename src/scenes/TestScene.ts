import Phaser from 'phaser';

// 테스트용 초기 화면 씬(Scene: 게임의 특정 화면 단위를 의미합니다)
export class TestScene extends Phaser.Scene {
  constructor() {
    super('TestScene');
  }

  // 화면을 처음 만들 때 실행되는 함수
  create(): void {
    const { width, height } = this.scale;

    // 화면 정중앙에 텍스트를 표시합니다
    this.add.text(width / 2, height / 2, '가상 오피스 준비 완료', {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '28px',
      color: '#ffffff',
      fontStyle: 'bold',
    }).setOrigin(0.5); // 0.5로 설정하여 텍스트의 중심점을 가운데로 맞춥니다
  }
}
